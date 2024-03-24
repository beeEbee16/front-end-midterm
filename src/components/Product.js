import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

  const Product = ({ id, productName, price, productImage}) => {
    const { increaseCartQuantity, detailProdId, setDetailProdId } = useContext(DataContext);
    

  return (
    <div className='product'>
      <Link to='/ProductDetailpage' id={id}>
        <img src={productImage} onClick={() => setDetailProdId(id)}/>
      </Link>
      <div className='product-description'>
        <p><b>{productName}</b></p>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className='btnAddCart'>
        <button onClick={() => increaseCartQuantity(id)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product;
