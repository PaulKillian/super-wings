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
        <div className="col-10 ml-5 shadow">
          <div className="">
            <p className="pointer" onClick={() => this.props.setView('catalog', {})}>Back to Catalog</p>
            <div className="d-flex flex-wrap">
              <img className="ml-3" src={this.state.product.image}></img>
              <div>
                <h2>{this.state.product.name}</h2>
                <h3>${this.state.product.price / 100}</h3>
                <h4>{this.state.product.shortDescription}</h4>
              </div>
            </div>
            <div>{this.state.product.longDescription}</div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
