// import React from 'react';
// import CartContext from './cart-context'; // Assuming cart-context exports CartContext

// const CartProvider = (props) => {
//   const addItemToCartHandler = (item) => {
//     // Logic to add item to cart
//   };

//   const removeItemFromCartHandler = (id) => {
//     // Logic to remove item from cart
//   };

//   const cartContextValue = {
//     items: [],
//     totalAmount: 0,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler
//   };

//   return (
//     <CartContext.Provider value={cartContextValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const existingItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        // Item already exists in cart, update quantity
        updatedItems[existingItemIndex].amount += item.amount;
      } else {
        // Item is new, add it to the cart
        updatedItems.push(item);
      }

      return updatedItems;
    });

    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price * item.amount);
  };

  const removeItemFromCartHandler = (id) => {
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const existingItemIndex = updatedItems.findIndex((item) => item.id === id);
      const existingItem = updatedItems[existingItemIndex];
      setTotalAmount((prevTotalAmount) => prevTotalAmount - existingItem.price);

      if (existingItem.amount === 1) {
        // Remove the item completely when its quantity becomes 1
        updatedItems.splice(existingItemIndex, 1);
      } else {
        // Decrease the item quantity
        updatedItems[existingItemIndex].amount -= 1;
      }

      return updatedItems;
    });
  };

  const cartContextValue = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

