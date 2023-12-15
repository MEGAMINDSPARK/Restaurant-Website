import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
   const [CartIsShown, setCartIsShown]= useState(false);
  const ShowCartHandler = () =>{
  setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      { CartIsShown && <Cart onClose={hideCartHandler}/>}

      
      
      <Header  onShowCart= {ShowCartHandler}/>
      
      {/* <Cart/> */}
      {/* <Header/> */}
      <main>
        <Meals />
      </main>

    </Fragment>
  );
}

export default App;