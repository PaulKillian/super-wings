import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`api/products/${this.props.productId}`)
      .then(res => res.json())
      .then(description => {
        this.setState({ product: description });
      });
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="bg-light col-11 container pt-5">
          <div className="col-10 container shadow border">
            <div className="ml-l">
              <p className="pointer mt-4" onClick={() => this.props.setView('catalog', {})}>Back to Catalog</p>
              <div className="d-flex flex-wrap">
                <img className="ml-4" src={this.state.product.image}></img>
                <div>
                  <h3>{this.state.product.name}</h3>
                  <h5 className="text-muted">${this.state.product.price / 100}</h5>
                  <button onClick={() => this.props.addToCart(this.state.product)}>Add To Cart</button>
                  <p>{this.state.product.shortDescription}</p>
                </div>
              </div>
              <div>{this.state.product.longDescription}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
