import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  let newSummary = 0;
  for (let i = 0; i < props.summaryPrice.length; i++) {
    newSummary += props.summaryPrice[i].price;
  }
  return (
    <>
      <div className="col-11 container image-box pb-2 d-flex flex-column">
        <p className="pointer col-11 container mt-5 text-white" onClick={() => props.setView('catalog', {})}>
          <i className="fas fa-arrow-circle-left mr-1"></i>Back To Catalog</p>
        <h2 className="col-11 ml-5 text-white">My Cart</h2>
        {props.cartItem.map(item => {
          return (
            <CartSummaryItem
              key={item.productId}
              image={item.image}
              name={item.name}
              price={item.price / 100}
              description={item.shortDescription}
            />
          );
        })}
        <div className="col-11 d-flex justify-content-around mt-2 mb-2 mr-5">
          <h3 className="text-white ">Item Total ${newSummary / 100}</h3>
          <button className="btn btn-primary" onClick={() => props.setView('checkout', {})}>Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CartSummary;
