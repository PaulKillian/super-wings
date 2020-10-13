import React from 'react';

function Header(props) {
  return (
    <div className="d-flex flex-row justify-content-center color col-12
      fixed shadow header-image">
      <div className="col-7 d-flex flex-wrap justify-content-start mr-4 header">
        <h2 className="row mt-1 ml-5 pl-5 text-white header">The Super Wings Store</h2>
      </div>
      <h5 className="text-white mt-2 ml-5 pointer" onClick={() => props.setView('cart', { params: {} })}>
        {props.items} Items <i className="fas fa-shopping-cart text-white mt-2"></i></h5>
    </div>
  );
}

export default Header;
