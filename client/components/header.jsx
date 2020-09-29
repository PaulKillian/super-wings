import React from 'react';

function Header(props) {
  return (
    <div className="bg-light h-100">
      <div className="container d-flex flex-wrap col-10 bg-primary shadow mt-3 ">
        <i className="fas fa-dollar-sign h-25 d-flex mt-3 ml-4 text-white"></i>
        <h2 className="mt-1 text-white">Wicked Sales</h2>
        <div className="d-flex justify-content-end col-9">
          <button>{props.items} Item <i className="fas fa-shopping-cart"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
