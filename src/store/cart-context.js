// import React from 'react';

// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {}
// });

// export default CartContext;

import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {}, // Placeholder functions
  removeItem: (id) => {} // Placeholder functions
});

export default CartContext;
