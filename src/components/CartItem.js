import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { StoreProducts } from "../components/StoreProducts";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CartItem = ({ id, quantity }) => {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useContext(DataContext);
    const item = StoreProducts.find((product => product.id === id));
    if (item == null) return null;

    const totalItemPrice = item.price * quantity;

  return (
    <div className='cartItem'>
        <img src={item.productImage} />
        <div className='cartDescription'>
            <div id='cartItemName'><b>{item.productName}</b></div>
            <div className='cartItemTotal'>
                <p>${item.price.toFixed(2)} ea</p>
                <p id='itemTotal'><b>${totalItemPrice.toFixed(2)}</b></p>
            </div>
        <div className='cartItemCounter'>
            <RiSubtractFill role='button' className='btnCartSub btnCartItem' onClick={() => decreaseCartQuantity(id)}/>
            <p style={{fontSize: '20px'}}><b>{quantity}</b></p>
            <IoMdAdd role='button' className='btnCartAdd btnCartItem' onClick={() => increaseCartQuantity(id)}/>
            <MdDelete role='button' className='btnCartDelete' onClick={() => removeFromCart(id)}/>
        </div>
        </div>
    </div>
)
}

export default CartItem
