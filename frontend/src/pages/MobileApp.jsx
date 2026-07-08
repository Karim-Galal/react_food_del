import React from 'react'
import Container from '../components/Container'
import { assets } from '../assets/frontend_assets/assets'

const features = [
  'Order your favorite meals in a few taps',
  'Track your cart and checkout faster',
  'Discover local favorites by category',
  'Save time with a simple mobile ordering experience',
]

const MobileApp = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Get the Tomato app
          </h1>
          <p className="text-slate-600 text-lg mb-6">
            Enjoy a faster food ordering experience from your phone. Browse dishes, add meals to your cart, and stay ready for quick checkout wherever you are.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-4 bg-slate-100 dark:bg-gray-800 rounded-lg text-slate-700 dark:text-gray-200"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              <img src={assets.app_store} alt="Download on the App Store" className="h-12" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
              <img src={assets.play_store} alt="Get it on Google Play" className="h-12" />
            </a>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-6">
              <img src={assets.logo} alt="Tomato" className="w-28" />
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                Mobile
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              Fresh meals, faster ordering.
            </h2>
            <p className="text-slate-600 dark:text-gray-200 mb-5">
              The mobile app keeps the same simple shopping experience in a layout made for quick browsing.
            </p>
            <div className="space-y-3">
              <div className="h-3 bg-orange-200 rounded-full w-3/4"></div>
              <div className="h-3 bg-slate-200 rounded-full w-full"></div>
              <div className="h-3 bg-slate-200 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MobileApp
