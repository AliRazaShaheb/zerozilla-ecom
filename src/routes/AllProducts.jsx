import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useGlobal } from '../context/Context';


export const AllProducts = () => {

    const {allProducts} = useGlobal()

  return (
    <>
    <div className='product-container' >
        {allProducts.map((item)=>(
          <ProductCard key={item.id} item={item} />
        ))}
    </div>
      <Outlet />
    </>
    
    );
};
