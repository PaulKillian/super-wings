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
        <div className="bg-light col-11 container pt-5 pb-5 image-box">
          <div className="col-10 container shadow border item-color">
            <div className="ml-l">
              <p className="pointer mt-4" onClick={() => this.props.setView('catalog', {})}>
                <i className="fas fa-arrow-circle-left mr-1"></i>Back to Catalog</p>
              <div className="d-flex flex-wrap">
                <img className="ml-4 bg-light detail-img" src={this.state.product.image}></img>
                <div>
                  <h3>{this.state.product.name}</h3>
                  <h5 className="text-muted">${this.state.product.price / 100}</h5>
                  <button className="btn btn-primary text-white" onClick={() => this.props.addToCart(this.state.product)}>Add To Cart</button>
                  <p>{this.state.product.shortDescription}</p>
                </div>
              </div>
              <div className="mb-3 mt-3">{this.state.product.longDescription}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
