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
            <p className="pointer">Back to Catalog</p>
            <div className="d-flex flex-wrap">
              <img className="ml-3" src="images\shake-weight.jpg"></img>
              <div>
                <h2>Shake Weight</h2>
                <h3>$29.99</h3>
                <h4>Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.</h4>
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
