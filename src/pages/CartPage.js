import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems } = useContext(DataContext);

  return (
    <div className='Cart'>
      <div className='cartTitle'>
        <h1>Cart Items</h1>
      </div>
      <div className='CartItems'>
        {cartItems.map((item) => (
          <CartItem id={item.id} key={item.id} quantity={item.quantity}/>
        ))}
      </div>
    </div>
  )
}

export default CartPage
