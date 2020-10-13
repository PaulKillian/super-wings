import React from 'react';

function Header(props) {
  return (
    <div className="container d-flex flex-row justify-content-center color col-11 shadow mt-3 header-image">
      <div className="col-7 d-flex flex-wrap justify-content-start mr-4">
        <h2 className="mt-1 pl-5 text-white">The Super Wings Store</h2>
      </div>
      <h5 className="text-white mt-2 pointer" onClick={() => props.setView('cart', { params: {} })}>
        {props.items} Items <i className="fas fa-shopping-cart text-white mt-2"></i></h5>
    </div>
  );
}

export default Header;
