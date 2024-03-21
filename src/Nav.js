import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (

    <div className='navbar'>
      <nav>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/ShopPage'>Shop</Link>
            <Link to='/About'>About</Link>
            <Link to='/CartPage'>
              <FaShoppingCart 
                type='button'
                className='btnCart'  
              />
            </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
