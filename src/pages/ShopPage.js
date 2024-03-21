import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { StoreProducts } from "../components/StoreProducts";
import Product from '../components/Product';

const ShopPage = () => {
    const [search, setSearch] = useState('');

    let productList;

    if(search.length) {
        productList = StoreProducts.filter(product => ((product.productName).toLowerCase()).includes(search.toLocaleLowerCase()));
    } else {
        productList = StoreProducts;
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='shopSearch'>
                    <input
                        type='text'
                        id='search'
                        role='searchbox'
                        placeholder='Search Items'
                        autoFocus
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoMdSearch 
                        role='button'
                        className='btnSearch'
                    />
                </div>
            </form>
            <div className='products'>
                {productList.map((product) => (
                    <Product 
                        id={product.id}
                        key={product.id}
                        productName={product.productName}
                        price={product.price}
                        productImage={product.productImage}
                    />
                ))}
            </div>
        </>
    )

};

export default ShopPage;