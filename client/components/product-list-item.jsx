import React from 'react';

function ProductListItem(props) {
  return (
    <div className="shadow mr-5 col-lg-3 col-sm-12 mt-5 border pointer pb-3 width" onClick={props.onClick}>
      <img src={props.image}></img>
      <h4 className="mb-3" >{props.name}</h4>
      <h6 className="mb-3 text-muted">${props.price / 100}</h6>
      <p className="mb-3">{props.description}</p>
    </div>
  );
}

export default ProductListItem;
