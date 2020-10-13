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

  getProducts() {
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
      <div className="bg-muted col-11 container col-sm-12">
        <div className="d-flex flex-wrap justify-content-center col-12 ml-4">
          {this.state.products.map(product => {
            return (
              <ProductListItem
                key={product.productId} onClick={() => this.props.setView('details', { productId: product.productId })}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.shortDescription}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
