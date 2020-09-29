require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
select "productId",
"name",
"price",
"image",
"shortDescription"
from "products"
`;
  db.query(sql)
    .then(result => {
      const products = result.rows;
      res.json(products);
    }).catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  const sql = `
select *
  from "products"
 where "productId" = $1
`;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (product === undefined) {
        next(new ClientError('Product does not exist', 404));
      } else {
        res.json(product);
      }

    }).catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    res.json([]);
  } else {
    const sql = `
  select "c"."cartItemId",
      "c"."price",
      "p"."productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
    from "cartItems" as "c"
    join "products" as "p" using ("productId")
  where "c"."cartId" = $1`;
    const params = [req.session.cartId];
    db.query(sql, params)
      .then(result => {
        res.json(result.rows[0]);
      }).catch(err => next(err));
  }
});

app.post('/api/cart/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      error: 'PoductId must be a positive integer'
    });
  }
  const priceSql = `
    select "price"
      from "products"
      where "productId" = $1`;
  const priceParams = [productId];
  db.query(priceSql, priceParams)
    .then(priceResult => {
      if (priceResult.rows.length === 0) {
        next(new ClientError('Product does not exist', 400));
        return;
      } if (req.session.cartId) {
        const cartAndPrice = {
          cartId: req.session.cartId,
          price: priceResult.rows[0].price
        };
        return cartAndPrice;
      }
      const cartId = `
      insert into "carts" ("cartId", "createdAt")
      values (default, default)
      returning "cartId"`;
      return db.query(cartId)
        .then(cartResult => {
          const combined = {
            cartId: cartResult.rows[0].cartId,
            price: priceResult.rows[0].price
          };
          return combined;
        })
        .then(combined => {
          req.session.cartId = combined.cartId;
          const cartItemId = `
              insert into "cartItems" ("cartId", "productId", "price")
              values ($1, $2, $3)
              returning "cartItemId"`;
          const params = [req.session.cartId, productId, combined.price];
          return db.query(cartItemId, params)
            .then(cartItemId => {
              const cartItemInfo = `
            select "c"."cartItemId",
                  "c"."price",
                  "p"."productId",
                  "p"."image",
                  "p"."name",
                  "p"."shortDescription"
              from "cartItems" as "c"
              join "products" as "p" using ("productId")
            where "c"."cartItemId" = $1`;
              const params = [cartItemId.rows[0].cartItemId];
              return db.query(cartItemInfo, params)
                .then(cartItemInfo => {
                  res.status(201).json(cartItemInfo);
                });
            });
        });
    }).catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
