import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: 'details',
        params: {
          products: params
        }
      }
    });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList onClick={this.setView} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <ProductDetails />
          <ProductList onClick={this.setView}/>
        </div>
      );
    }
  }
}

export default App;
