import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

  const Product = ({ id, productName, price, productImage }) => {
    const { increaseCartQuantity } = useContext(DataContext);
  return (
    <div className='product'>
      <img src={productImage}/>
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
