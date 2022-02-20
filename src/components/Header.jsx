import React from 'react';
import logo from '../common/logo.png';
import shoppingCart from '../common/shopping-cart.svg';

const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-between">
        <div className="headerLeft d-flex align-items-center">
          <div>
            <img src={logo} />
          </div>
          <div>
            <b>REACT PIZZA</b>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div>
          <div className="headerRight d-flex justify-content-around align-items-center">
            <span>502 $</span>
            <div></div>
            <span className="shoppingCart">
              <img src={shoppingCart} width="16px" height="16px" />
              <span> 3</span>
            </span>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Header;
