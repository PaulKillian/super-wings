import React from 'react';
function ProductListItem(props) {
  return (
    <div className="shadow mr-5 col-3 mt-5 pointer" onClick={props.onClick}>
      <img src={props.image}></img>
      <div className="mb-2" >{props.name}</div>
      <div className="mb-2">${props.price}</div>
      <div className="mb-5">{props.description}</div>
    </div>
  );
}

export default ProductListItem;
