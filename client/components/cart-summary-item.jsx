import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="d-flex shadow mr-5 col-11 mt-5">
      <img className="col-4" src={props.image}></img>
      <div>
        <div className="mb-2" >{props.name}</div>
        <div className="mb-2">{props.price}</div>
        <div className="mb-5">{props.description}</div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
