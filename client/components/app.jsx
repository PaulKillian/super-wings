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
    if (name === 'catalog') {
      this.setState({
        view: {
          name: 'catalog',
          params: {}
        }
      });
    } else {
      this.setState({
        view: {
          name: name,
          params: params
        }
      });
    }
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList setView={this.setView} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <ProductDetails productId={this.state.view.params.productId} setView={this.setView}/>
        </div>
      );
    }
  }
}

export default App;
