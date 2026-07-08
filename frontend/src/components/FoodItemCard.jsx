import React, { useContext } from 'react'
import {FaPlus, FaMinus} from  "react-icons/fa"
import { StoreContext } from '../context/StoreContextValue';

const FoodItemCard = ({item}) => {

  const { cartItems, addToCart , removeFromCart } = useContext(StoreContext);
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <div className=' '>
      

    

      <div className="food-item max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700">
          <div className='mx-auto relative '>
              <img className="rounded-t-lg mx-auto" src={item.image} alt="" />
              <div className='buy-item absolute rounded-full z-50  right-3 bottom-3'>
                {!cartItems[item._id] ? (
                    <button
                      onClick={() => addToCart( item._id )}
                      className="flex items-center justify-center h-10 w-10 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                      <FaPlus />
                    </button>
                  ) : 
                  (
                    <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 shadow-md">
                      {/* btn - */}
                      <button
                        onClick={() => removeFromCart( item._id )}
                        className="flex items-center justify-center h-8 w-8 bg-red-200 text-black rounded-full hover:bg-red-300 transition"
                      >
                        <FaMinus />
                      </button>

                      {/* counter */}
                      <span className="text-lg font-medium w-6 text-center">
                        {cartItems[item._id]}
                      </span>

                      {/* + btn */}
                      <button
                        onClick={() => addToCart( item._id )}
                        className="flex items-center justify-center h-8 w-8 bg-green-300 text-white rounded-full hover:bg-green-400 transition"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  )}
                
              </div>
          </div>
          <div className="p-5">
              
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.name} </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {item.description} </p>
              
              <p className='mb-3 text-2xl text-orange-500 ' >{formatPrice(item.price)}</p>
          </div>
      </div>


    </div>
  )
}

export default FoodItemCard
