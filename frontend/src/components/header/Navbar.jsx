import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = ({links , cls =''}) => {
  return (
    <nav className={` ${cls}`}>
      
      <ul className='flex items-center px-4'  >
        {
          links.map((link, index)=> (
            
            <li 
              key={index}
              >
              <NavLink
                to={link.url}
                className='text-nowrap p-2 text-slate-500 font-bold hover:text-slate-700
                            '
              >
                {link.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
