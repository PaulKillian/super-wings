import React from 'react';

function Header(props) {
  return (
    <div className="container d-flex flex-row col-10 bg-primary shadow mt-3 ">
      <div className="col-10 d-flex flex-wrap justify-content-start">
        <i className="fas fa-dollar-sign h-25 d-flex mt-3 ml-4 text-white"></i>
        <h2 className="mt-1 text-white">Wicked Sales</h2>
      </div>
      <button onClick={() => props.setView('cart', { params: {} })}>
        {props.items} Item <i className="fas fa-shopping-cart"></i></button>
    </div>
  );
}

export default Header;
