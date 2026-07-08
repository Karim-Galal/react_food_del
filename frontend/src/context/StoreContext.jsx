import React, { useEffect, useState } from 'react'
import { food_list } from '../assets/frontend_assets/assets'
import { StoreContext } from './StoreContextValue'

const CART_STORAGE_KEY = 'cartItems';

const getSavedCart = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) return {};

    const parsedCart = JSON.parse(savedCart);

    if (!parsedCart || typeof parsedCart !== 'object' || Array.isArray(parsedCart)) {
      return {};
    }

    return parsedCart;
  } catch (error) {
    return {};
  }
}

const StoreContextProvider = (props) => {


  

  const [cartItems , setCartItems] = useState(getSavedCart);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart items', error);
    }
  }, [cartItems]);

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
