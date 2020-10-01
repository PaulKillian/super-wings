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
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  handleReset() {
    this.setState({
      name: '',
      creditCard: '',
      shipingAddress: ''
    });
  }

  render() {
    const name = this.state.name;
    const creditCard = this.state.creditCard;
    const shippingAddress = this.state.shippingAddress;
    return (
      <>
        <h2>My Cart</h2>
        <h4>Order Total: $</h4>
        <form className="container mt-">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"/>
          </div>
          <div className="form-group">
            <label>Credit Card</label>
            <input
              type="text"
              className="form-control"
              name="creditCard"
              value={creditCard}
              onChange={this.handleChange}
              placeholder="Credit Card" />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea
              type="textarea"
              className="form-control"
              name="shippingAddress"
              value={shippingAddress}
              onChange={this.handleChange}
              placeholder="Shipping Address" />
          </div>
          <div className="d-flex col-12 justify-content-between">
            <p className="pointer" onClick={() => this.props.setView('catalog', {})}>Continue Shopping</p>
            <button onClick={this.handleSubmit}
              type="submit" className="btn btn-primary">
              {/* // onClick={() => this.props.placeOrder(this.state)}>Place Order */}
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CheckoutForm;
