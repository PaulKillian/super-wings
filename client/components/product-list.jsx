import React from 'react';
import ProductListItem from './product-list-item';

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

  getProducts(props) {
    fetch('./api/products')
      .then(res => res.json())
      .then(products => {
        this.setState({
          products: products
        });
      }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center col-12">
        {this.state.products.map(products => {
          return (
            <ProductListItem onClick={(this.setView)}
              key={products.id}
              image={products.image}
              name={products.name}
              price={products.price}
              description={products.shortDescription}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
