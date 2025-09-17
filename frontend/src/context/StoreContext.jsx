import React, { createContext, useState } from 'react'
import { food_list } from '../assets/frontend_assets/assets'

export  const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


  

  const [cartItems , setCartItems] = useState({});

  const addToCart = (itemId) => {
    
    if (!cartItems[itemId]) {
      setCartItems( (prev) => ({...prev,  [itemId]:1}) )
    }else {
      setCartItems((prev) => ( {...prev, [itemId]: cartItems[itemId] + 1}))
    }

  }

  const removeFromCart = (itemId) => {

    setCartItems((prev) => {
      if (!prev[itemId]) return prev; 

      const updated = { ...prev };

      if (prev[itemId] > 1) {
        updated[itemId] = prev[itemId] - 1;
      } else {
        delete updated[itemId]; 
      }

      return updated;
    });
  };
  const removeAllAmount = (itemId) => {

    setCartItems((prev) => {

      

      const updated = { ...prev };

      delete updated[itemId]; 
      
      return updated;
    });
  };

  const getTotalAmount = () => {

  let total = 0;

  for (let item in cartItems) {
    let itemInfo = food_list.find(product => product._id === item);

    if (itemInfo) {
      total += itemInfo.price * cartItems[item]; 
    }
  }

  return total;
};


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    removeAllAmount,
    getTotalAmount,

  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
