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

  total(props) {
    let newSummary = 0;
    for (let i = 0; i < this.props.totalPrice.length; i++) {
      newSummary += this.props.totalPrice[i].price;
    }
    return newSummary;
  }

  render() {
    const name = this.state.name;
    const creditCard = this.state.creditCard;
    const shippingAddress = this.state.shippingAddress;
    const total = this.total();
    return (
      <div className="container bg-muted">
        <h2 className="row mt-5 pl-3">My Cart</h2>
        <h6 className="row mt-4 pl-3 ml-4 text-muted">Order Total: ${total / 100} </h6>
        <form>
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
              type="submit" className="btn btn-primary"
            >Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
