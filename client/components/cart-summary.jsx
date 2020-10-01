import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  let newSummary = 0;
  for (let i = 0; i < props.totalPrice.length; i++) {
    newSummary += props.totalPrice[i].price;
  }
  return (
    <>
      <div className="col-12">
        <p className="pointer" onClick={() => props.setView('catalog', {})}>Back To Catalog</p>
        <h2>My Cart</h2>
        {props.cartItem.map(item => {
          return (
            <CartSummaryItem
              key={item.productId}
              image={item.image}
              name={item.name}
              price={item.price / 100}
              description={item.shortDescription}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-around">
        <h3>Item Total ${newSummary / 100}</h3>
        <button className="bg-primary" onClick={() => props.setView('checkout', {})}>Checkout</button>
      </div>
    </>
  );
}

export default CartSummary;
