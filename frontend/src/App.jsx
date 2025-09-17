import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/hearder/Header'
import Heading  from './components/Heading'
import Container from './components/Container'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import LoginPopup from './components/loginPopup'
// pages 
import Cart from './pages/Cart'
import ExploreMenu from './components/ExploreMenu'
import Home from './pages/Home'
import TakeOrder from './pages/TakeOrder'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (

    <BrowserRouter>

      <div 
        // onClick={()=>setShowLogin(false)}
        className='font-outfi relative'>

      
        <Header setShowLogin={setShowLogin} />  
        {/* login form */}
        {showLogin && ( <LoginPopup setShowLogin={setShowLogin} /> )}
        

        <Routes>

          <Route path='/' element={
            <Home />
          } />
          <Route path='/cart' element={<Cart />} />
          
          <Route path='/order' element={<TakeOrder />} />


        </Routes>
        
        
        <Footer />

      </div>

    
    </BrowserRouter>
  )
}

export default App
