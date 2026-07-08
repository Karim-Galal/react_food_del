import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-slate-200">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <div className="logo">
              <img src={assets.logo} alt="Tomato" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Fresh meals delivered with a simple ordering experience.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Explore</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/menu" className="hover:underline">Menu</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
              <li className="mb-4">
                <Link to="/mobile-app" className="hover:underline">Mobile App</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <span>Privacy Policy</span>
              </li>
              <li className="mb-4">
                <span>Terms of Service</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">support@tomatofood.com</li>
              <li className="mb-4">+20 100 123 4567</li>
              <li className="mb-4">Cairo, Egypt</li>
            </ul>
          </div>
        </div>

        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © {new Date().getFullYear()} Tomato Food Delivery. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
