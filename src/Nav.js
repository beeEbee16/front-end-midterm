import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import DataContext from './context/DataContext';

const Nav = () => {
  const { cartQuantity } = useContext(DataContext);

  return (
    <div className='navbar'>
      <nav>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/ShopPage'>Shop</Link>
            <Link to='/About'>About</Link>
            <Link to='/CartPage'>
              <div className='cartCount' style={{position: 'relative'}}>
                <FaShoppingCart 
                  type='button'
                  className='btnCart'  
                />
                <span>{cartQuantity}</span>
              </div>
            </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
