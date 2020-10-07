import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  total(props) {
    let newSummary = 0;
    for (let i = 0; i < this.props.totalPrice.length; i++) {
      newSummary += this.props.totalPrice[i].price;
    }
    return newSummary;
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(formData);
  }

  render() {
    const total = this.total();
    return (
      <div className="container bg-muted">
        <h2 className="row mt-5 pl-3">My Cart</h2>
        <h6 className="row mt-4 pl-3 ml-4 text-muted">Order Total: ${total / 100} </h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Credit Card</label>
            <input
              type="text"
              className="form-control"
              name="creditCard"
              value={this.state.creditCard}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              type="textarea"
              className="form-control"
              name="shippingAddress"
              value={this.state.shippingAddress}
              onChange={this.handleChange}
            />
          </div>
          <div className="d-flex col-12 justify-content-between">
            <button type="submit" className="btn btn-primary
            ">Place Order</button>
          </div>
        </form>
        <p className="pointer" onClick={() => this.props.setView('catalog', {})}>Continue Shopping</p>
      </div>
    );
  }
}

export default CheckoutForm;
