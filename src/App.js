import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
  // const [cartIsshown, setcartIsshown]= useState(false);
  // const showcartHandler = () =>{
  // setcartIsshown(true);
  // };
  // const hidecartHandler = () => {
  //   setcartIsshown(false);
  
  return (
    <Fragment>
      {/* { cartIsshown && <Cart onclose={hidecartHandler}/>} */}

      
      
      {/* <Header  onshowcart= {showcartHandler}/> */}
      
      <Cart/>
      <Header/>
      <main>
        <Meals />
      </main>

    </Fragment>
  );
}

export default App;
