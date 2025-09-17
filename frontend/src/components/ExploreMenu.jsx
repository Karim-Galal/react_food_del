import React from 'react'
import Heading from './Heading'
import {  menu_list } from '../assets/frontend_assets/assets'

const ExploreMenu = ( {category = 'all' , onClick= ()=> {} } ) => {
  return (
    <div className='explore-menu'>

      <Heading heading={'Explore Menu'}/>

      <p className='lg:w-[600px]'>
        Enjoy a seamless food delivery experience with a diverse menu of local and international flavors — delivered hot and fresh to your door.
      </p>

      <div className="explore-menu-list py-5 flex justify-between items-center
                      gap-4 overflow-x-scroll scrollbar-hide ">
                        
        {menu_list.map((menu, index)=> {

          return (
            <div 
              onClick={() => onClick((prev) =>
                prev === menu.menu_name ? "all" : menu.menu_name
              )}
              key={index}
              className={`cursor-pointer flex flex-col justify-center items-center min-w-[140px]
                    `}
            >

              {/* <div> */}
                <img src={menu.menu_image} 
                className={`mb-3 rounded-full
                  ${category === menu.menu_name 
                      ? 'outline-2 outline-orange-500 p-1'
                      : '' }`} />
              {/* </div> */}
              <p
                className={`
                  ${category === menu.menu_name 
                      ? 'text-orange-500 '
                      : '' }`} 
              >
                {menu.menu_name }
              </p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
