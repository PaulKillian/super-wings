import React from 'react';

function Header(props) {
  return (
    <div className="bg-light h-100">
      <div className="container d-flex flex-wrap col-11 bg-primary shadow mt-3 ">
        <i className="fas fa-dollar-sign h-25 d-flex mt-3 text-white"></i>
        <h2 className="mt-1 text-white">Wicked Sales</h2>
      </div>
    </div>
  );
}

export default Header;
