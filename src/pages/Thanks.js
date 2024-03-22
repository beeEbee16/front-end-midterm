import React from 'react'
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div style={{fontSize: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <p><b>Thank you for shopping at Bradley's Bookstore!</b></p>
      <Link to='/ShopPage'>
      <button className='cartButtons' id='btnConShop'>Continue Shopping</button>
      </Link>
    </div>
  )
}

export default Thanks
