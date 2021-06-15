import React from 'react';
import classes from './css/Header.module.css';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import mealsImage from '../../assets/images/food.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Order Food</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Food table' />
      </div>
    </React.Fragment>
  );
};

export default Header;
