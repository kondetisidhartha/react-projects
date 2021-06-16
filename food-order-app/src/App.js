import React, { useState } from 'react';
import Header from './Layout/Header/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && (
        <Cart onHideCart={hideCartHandler} onHideCart={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </React.Fragment>
  );
}

export default App;
