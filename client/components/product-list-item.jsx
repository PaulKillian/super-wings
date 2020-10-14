import React from 'react';

function ProductListItem(props) {
  return (
    <div className="shadow mr-5 row border pointer d-flex
    item-color pb-3 mb-2 mt-3 width" onClick={props.onClick}>
      <div className="ml-3 flex" d-flex justify-content-column>
        <img src={props.image}></img>
        <h4 className="mb-3" >{props.name}</h4>
        <h6 className="mb-3 text-muted">${props.price / 100}</h6>
        <p className="mb-3">{props.description}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
