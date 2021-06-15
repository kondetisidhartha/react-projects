import React from 'react';

import classes from './css/HeaderCartButton.module.css';

import CartIcon from '../../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;