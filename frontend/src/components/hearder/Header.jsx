import Navbar from "./Navbar";
import React, { useContext, useState } from 'react'
// import Container from "./Container";
import {assets} from '../../assets/frontend_assets/assets'
import { FaSearch, FaShoppingBag, FaShoppingCart } from "react-icons/fa"   // solid
import { Link } from "react-router-dom";
// import { FaRegSearch, FaRegHandbag, FaRegCreditCard } from "react-icons/fa6"
import { StoreContext } from "../../context/StoreContext";




const links = [
  {title:'Home', url: '/'},
  {title:'Menu', url: 'menu'},
  {title:'Mobile App', url: 'mobile-app'},
  {title:'Contact us', url: 'contact'},
  

];

const Header = ({setShowLogin, searchQuery, setSearchQuery}) => {

  const {cartItems} = useContext(StoreContext);
  const [showSearch, setShowSearch] = useState(false);

  
  return (
    <>
      

        <div className="flex py-4 items-center justify-between w-[95%] sm:w-[80%] mx-auto">

          <div className="logo w-[150px] ">
              <Link 
                to={'/'}
                className=""
              >
                <img src={assets.logo} alt="" />
              </Link>
          </div>

          <Navbar 
            links={links} 
            cls="hidden md:block "
            
          />

          <div className="nav-right flex items-center gap-2  sm:gap-3.5">
            {showSearch && (
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text" 
                placeholder="Search foods..."
                className="w-28 sm:w-44 px-3 py-1.5 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
              />
            )}

            <button
              type="button"
              title="search" 
              onClick={() => setShowSearch((prev) => !prev)}
              className="cursor-pointer">
              <FaSearch className="text-xl" />
            </button>
            
            <Link 
              title="cart"
              to={'cart'}
              className="relative w-fit inline-flex items-center  text-sm font-medium   "
            > 
              <FaShoppingBag className="text-xl" />
              {cartItems && Object.keys(cartItems).length > 0  && (
                <div className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 "></div>
              )}
            </Link>

            <button 
              onClick={()=> setShowLogin(true)}
              class="px-3.5 py-1.5 rounded-lg border border-gray-600 
                    text-gray-800 dark:text-gray-200 
                    bg-transparent cursor-pointer
                    hover:bg-gray-200 dark:hover:bg-gray-700 
                    transition-colors duration-300">
              Login
            </button>
          </div>

        </div>
    </>
  )
}

export default Header
