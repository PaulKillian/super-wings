import React from 'react';
import ProductListItem from './product-list-item';

const express = require('../../node_modules/express');

const app = express();

app.use(express.json());

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  // getProducts() {
  //   fetch('/api/products')
  //     .then(res => res.json())
  //     .then(grades => this.setState({ products: products }))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center col-12">
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    );
  }
}

export default ProductList;
