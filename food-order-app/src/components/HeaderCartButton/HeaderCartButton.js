import React, { useContext, useEffect, useState } from 'react';

import classes from './css/HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
