import React from 'react';

function Header(props) {
  return (
    <div className="d-flex flex-row justify-content-end color col-12
      fixed shadow header-image">
      <div className="col-7 d-flex flex-wrap justify-content-start mr-4 header">
      </div>
      <h5 className="text-white mt-3 ml-5 col-12 d-flex justify-content-end pointer pr-3" onClick={() => props.setView('cart', { params: {} })}>
        {props.items} Items <i className="fas fa-shopping-cart text-white"></i></h5>
    </div>
  );
}

export default Header;
