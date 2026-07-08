import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/hearder/Header'
import Footer from './components/Footer'
import LoginPopup from './components/loginPopup'
// pages 
import Cart from './pages/Cart'
import Home from './pages/Home'
import TakeOrder from './pages/TakeOrder'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import MobileApp from './pages/MobileApp'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (

    <BrowserRouter>

      <div 
        // onClick={()=>setShowLogin(false)}
        className='font-outfi relative'>

      
        <Header 
          setShowLogin={setShowLogin} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />  
        {/* login form */}
        {showLogin && ( <LoginPopup setShowLogin={setShowLogin} /> )}
        

        <Routes>

          <Route path='/' element={
            <Home searchQuery={searchQuery} />
          } />
          <Route path='/menu' element={<Menu searchQuery={searchQuery} />} />
          <Route path='/mobile-app' element={<MobileApp />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          
          <Route path='/order' element={<TakeOrder />} />


        </Routes>
        
        
        <Footer />

      </div>

    
    </BrowserRouter>
  )
}

export default App
