import React, { useContext } from 'react'
import Container from '../components/Container'
import { StoreContext } from '../context/StoreContextValue'
import {FaPlus, FaMinus, FaShoppingCart} from  "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    removeAllAmount, 
    getTotalAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const cartProducts = food_list.filter((item) => cartItems[item._id]);
  const isCartEmpty = cartProducts.length === 0;
  const subtotal = getTotalAmount();
  const deliveryFee = isCartEmpty ? 0 : 2;
  const total = subtotal + deliveryFee;
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <Container>
      <div className='py-10'>
        {isCartEmpty ? (
          <div className="text-center bg-white dark:bg-gray-800 shadow-md rounded-2xl p-10">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <FaShoppingCart className="text-3xl" />
            </div>
            <h1 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Your cart is empty
            </h1>
            <p className="text-slate-500 mb-6">
              Add your favorite dishes from the menu and they will appear here.
            </p>
            <button
              onClick={() => navigate('/menu')}
              className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((item) => (
                  <tr 
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <td className="p-4">
                      <img 
                        className='h-15 w-15 mx-auto'
                        src={item.image} 
                        alt={item.name}
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className='buy-item w-fit rounded-full'>
                        <div className="flex items-center gap-2 rounded-full">
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="flex items-center justify-center h-8 w-8 bg-red-200 text-black rounded-full hover:bg-red-300 transition"
                          >
                            <FaMinus />
                          </button>

                          <span className="text-lg font-medium w-6 text-center">
                            {cartItems[item._id]}
                          </span>

                          <button
                            onClick={() => addToCart(item._id)}
                            className="flex items-center justify-center h-8 w-8 bg-green-300 text-white rounded-full hover:bg-green-400 transition"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {formatPrice(item.price)}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeAllAmount(item._id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="container mx-auto px-4 py-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
                <span>Delivery Fee</span>
                <span>{formatPrice(deliveryFee)}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white mb-6">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button
                onClick={() => navigate('/order')}
                disabled={isCartEmpty}
                className={`px-4 py-2 text-white rounded-lg transition ${
                  isCartEmpty 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-600 hover:bg-orange-700 cursor-pointer'
                }`}
              >
                Proceed to checkout
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 md:p-6 flex flex-col justify-center">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Promo Code
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 max-w-full">
                <input
                  type="text"
                  placeholder="Enter code"
                  disabled
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                />
                <button 
                  type="button"
                  disabled
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
                >
                  Unavailable
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
