import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { StoreProducts } from '../components/StoreProducts';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
    const { cartItems, increaseCartQuantity, decreaseCartQuantity, removeFromCart, detailProdId, getItemQuantity } =useContext(DataContext);
    const item = StoreProducts.find((product => product.id === detailProdId));
    if (item == null) return null;

    const itemQuantity = getItemQuantity(item.id);
    const totalItemPrice = item.price * itemQuantity;

  return (
    <>
        <div className='detailItem'>
            <img src={item.productImage} />
            <div className='cartDescription'>
                <div id='detailItemName'><b>{item.productName}</b></div>
                    <p id='detailInfo' style={{marginBottom: '0'}}>Author: {item.author}</p>
                    <p id='detailInfo' style={{marginTop: '0', marginBottom: '0'}}>Pages: {item.pageLength}</p>
                    <p id='detailInfo' style={{marginTop: '0', marginBottom: '0'}}>Publication Date: {item.publicationDate}</p>
                    <p id='detailInfo'>{item.description}</p>
                <div className='cartItemTotal'>
                    <p>${item.price.toFixed(2)} ea</p>
                    <p id='itemTotal'><b>${totalItemPrice.toFixed(2)}</b></p>
                </div>
                <div className='detailItemCounter'>
                    <div className='btnDetailCart'>
                    <RiSubtractFill role='button' className='btnDetailSub btnDetailItem' onClick={() => decreaseCartQuantity(detailProdId)}/>
                    <p style={{fontSize: '20px'}}><b>{itemQuantity}</b></p>
                    <IoMdAdd role='button' className='btnDetailAdd btnDetailItem' onClick={() => increaseCartQuantity(detailProdId)}/>
                    </div>
                    <MdDelete role='button' className='btnDetailDelete' onClick={() => removeFromCart(detailProdId)}/>
                </div>
            </div>
        </div>
        <div className='btnDetailBack'>
            <Link to='/ShopPage'>
                <button>Back</button>
            </Link>
        </div>
    </>
  )
}

export default ProductDetailPage
