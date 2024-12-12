import React from 'react'
import './header.css'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className='logo'> AIMSA</div>
    
    <div className='link'>
      <Link to={'/'}>Home</Link>
      <Link to={'/'}>Desk</Link>
      <Link to={'/'}>About Us</Link>
      <Link to={'/'}>Our Team</Link>
      
      
    </div>
    
    </header>
  )
}

export default Header;
