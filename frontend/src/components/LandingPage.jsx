import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Heading from './Heading'

const LandingPage = () => {
  return (
    <div className='container w-[95%] sm:w-[80%] mx-auto p'>      
      <div  
        className="  landing-page h-[38vw] min-h-[250px] w-full bg-cover bg-center rounded-2xl p-4 flex items-center
                  relative"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className='content absolute z-40 left-4 bottom-4 lg:left-8 lg-bottom-8 text-slate-50 max-w-[90%] sm:max-w-[70%]
                        animate-fadeIn'>

          <h2 className='text-xl sm:text-3xl lg:text-4xl font-bold leading-tight '> 
            Order your favorite dishes 
          </h2>
          <p className='text-sm sm:text-base lg:text-lg mt-2'>
            Discover endless choices from local favorites to global cuisines, with easy ordering and fast delivery right to your doorstep.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full shadow-md
                      hover:bg-slate-100 hover:shadow-lg hover:scale-105 transition duration-300"
          >
            View Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
