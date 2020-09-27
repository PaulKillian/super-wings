import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount(productId) {
    fetch('api/products/1')
      .then(res => res.json())
      .then(product => {
        for (const keys in this.state.product) {
          if (product[keys] === `${productId}`) {
            this.setState({ product: product.longDescription });
          }
        }
      });
  }

  render() {
    if (this.state.product !== null) {
      return (
        <div className="col-10 ml-5 shadow">
          <div className="">
            <p>Back to Catalog</p>
            <div className="d-flex flex-wrap">
              <img className="ml-3" src="images\shake-weight.jpg"></img>
              <div>
                <h2>Shake Weight</h2>
                <h3>$29.99</h3>
                <h4>Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.</h4>
              </div>
            </div>
            <div>
Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level.
tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang
Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid.
Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard
tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin
woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
