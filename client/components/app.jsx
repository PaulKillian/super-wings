import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json(res))
      .then(receivedItems => {
        this.setState({ cart: receivedItems });
      })
      .catch(error => console.error(error));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(res => res.json())
      .then(addedItem => {
        const newItem = this.state.cart.slice();
        newItem.push(addedItem);
        this.setState({ cart: newItem });
      }).catch(error => console.error(error));
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header items={this.state.cart.length} setView={this.setView}/>
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header items={this.state.cart.length} />
          <CartSummary cartItem={this.state.cart} setView={this.setView}
            totalPrice={this.state.cart}/>
        </div>
      );
    } else {
      return (
        <div>
          <Header items={this.state.cart.length} setView={this.setView} />
          <ProductDetails productId={this.state.view.params.productId}
            setView={this.setView} addToCart={this.addToCart} />
        </div>
      );
    }
  }
}

export default App;
