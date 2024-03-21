import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return ( 
    <>
    <header><h1 className='header'>Bradley's Bookstore</h1></header>
    <main>
      <ImageSlider />
      <div className='btnCenter'>
        <Link to='/ShopPage'>
          <button className='btnShop'>Shop</button>
        </Link>
      </div>
    </main>
    </>
  )
}

export default Home
