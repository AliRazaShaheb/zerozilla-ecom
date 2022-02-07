import React from 'react';
import PcSkletonLoader from '../components/PcSkletonLoader';

import ProductCard from '../components/ProductCard';
import { useGlobal } from '../context/Context';



export const AllProducts = () => {

  const {isLoad,allProducts} = useGlobal()
  
  


  return (
    <div className='product-container' >
        {isLoad ? allProducts.map((item)=>(
          <ProductCard key={item.id} item={item} />
        )): [...Array(10)].map((_,idx)=><PcSkletonLoader key={idx}/>)}
    </div>
    
    );
};
