import React, { useContext } from 'react'
import {FaPlus, FaMinus} from  "react-icons/fa"
import { StoreContext } from '../context/StoreContext';

const FoodItemCard = ({item}) => {

  // const [itemCount, setItemCount] = useState(0);

  const { cartItems, addToCart , removeFromCart } = useContext(StoreContext);

  return (
    <div className=' '>
      

    

      <div className="food-item max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700">
          <div className='mx-auto relative '>
              <img className="rounded-t-lg mx-auto" src={item.image} alt="" />
              <div className='buy-item absolute rounded-full z-50  right-3 bottom-3'>
                {/* {itemCount === 0 ? ( */}
                {!cartItems[item._id] ? (
                    <button
                      // onClick={() => setItemCount(itemCount + 1)}
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
                        // onClick={() => setItemCount(itemCount - 1)}
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
                        // onClick={() => setItemCount(itemCount + 1)}
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
              
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.name} </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {item.description} </p>
              
              {/* <div> */}
                <p className='mb-3 text-2xl text-orange-500 ' >${ item.price}</p>
              {/* </div> */}

              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>


    </div>
  )
}

export default FoodItemCard
