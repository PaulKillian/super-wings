import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="ml-1">
      <div className="d-flex justify-content-start shadow ml-5 mr-5 col-11 mt-5">
        <img className="col-4" src={props.image}></img>
        <div>
          <h3 className="mb-2 mt-5">{props.name}</h3>
          <h5 className="mb-2 text-muted">${props.price}</h5>
          <p className="mb-5">{props.description}</p>
        </div>
      </div>
    </div >
  );
}

export default CartSummaryItem;
