import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="d-flex shadow mr-5 col-11 mt-5">
      <img className="col-4" src="server\public\images\ostrich-pillow.jpg"></img>
      <div className="">
        <div className="mb-2" >Name</div>
        <div className="mb-2">$2999</div>
        <div className="mb-5">Define a stateless CartSummary component that takes an Array of cart items via props and renders a list of CartSummaryItems. CartSummary should also have a heading for the list and display the total price of all cart items. If there are no items in the cart, then CartSummary should display a message to the user.</div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
