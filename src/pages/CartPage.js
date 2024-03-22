import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import CartItem from '../components/CartItem';
import { StoreProducts } from "../components/StoreProducts";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(DataContext);
  //const prod;

  /* const cartTotal = () => {
    cartItems.map((item) => (
      prod = StoreProducts.find((product => product.id === id))
      prod == null
    ))
  } */

  const cartTotal = cartItems.reduce((total, cartItem) => {
    const item = StoreProducts.find(product => product.id === cartItem.id)
    return total + item.price * cartItem.quantity
  }, 0)



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
      <b><p id='cartTotal'>Total: ${cartTotal.toFixed(2)}</p></b>
      <div className='cartButtonsDiv'>
        <Link to='/ShopPage'>
          <button className='cartButtons' id='btnConShop'>Continue Shopping</button>
        </Link>
        <Link to='/Thanks'>
          <button className='cartButtons' id='btnCheckout' style={{marginLeft: '100px'}} onClick={() => setCartItems([])}>Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default CartPage
