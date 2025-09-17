import React, { useContext } from 'react'
import Container from '../components/Container'
import { StoreContext } from '../context/StoreContext'
import {FaPlus, FaMinus} from  "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  
  const {cartItems,
        food_list,
        addToCart,
        removeFromCart,
        removeAllAmount, 
        getTotalAmount,
      } = useContext(StoreContext);

      const naviagte = useNavigate();

  return (
    <Container>
      <div className='py-10'>
        

        

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-16 py-3">
                            <span class="sr-only">Image</span>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      food_list.map((item, index) => (

                        cartItems[item._id] && (

                        
                          
                            <tr 
                                key={index}
                                class="  bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <td class="p-4 ">
                                  {/* <div > */}

                                    <img 
                                      className='h-15 w-15 mx-auto '
                                      src={item.image} 
                                      alt="Apple Watch"/>
                                  {/* </div> */}
                                </td>
                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    { item.name }
                                </td>
                                <td class="px-6 py-4">
                                    <div className='buy-item w-fit rounded-full'>
                                          <div className="flex items-center gap-2  rounded-full  ">
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
                                      
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    ${ item.price }
                                </td>
                                <td class="px-6 py-4">
                                    <a
                                      onClick={()=> removeAllAmount(item._id)} 
                                      href="#"
                                      class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                </td>
                            </tr>

                        )
                        


                      ))
                    }

                    {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <td class="p-4">
                            <img src="/docs/images/products/apple-watch.png" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            Apple Watch
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <div>
                                    <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                </div>
                                <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            $599
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr> */}

                </tbody>
            </table>
        </div>
        

    <div className="container mx-auto px-4 py-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Total Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Order Summary
          </h2>
          <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
            <span>Subtotal</span>
            <span> {getTotalAmount()} </span>
          </div>
          <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
            <span>Delivery Fee</span>
            <span>$2</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
          <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white mb-6">
            <span>Total</span>
            <span>$ {getTotalAmount() + 2 }</span>
          </div>
          <button
            onClick={()=> naviagte('order')}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition cursor-pointer">
              Proceed to chechout
            </button>
        </div>

        {/* Promo Code Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 md:p-6 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Promo Code
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 max-w-full">
            <input
              type="text"
              placeholder="Enter code"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            />
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Apply
            </button>
          </div>
        </div>

      </div>
    </div>



      </div>
    </Container>
  )
}

export default Cart
