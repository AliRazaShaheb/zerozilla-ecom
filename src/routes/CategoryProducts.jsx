import React,{useState, useEffect} from 'react';
import { getProductsByCategory } from '../api/allAPIs';
import PcSkletonLoader from '../components/PcSkletonLoader';
import ProductCard from '../components/ProductCard';
import { useGlobal } from '../context/Context';


const CategoryProducts = () => { 
    const [{isLoad,products}, setProducts] = useState({
      products:[],
      isLoad:false
    })
    const {selectedCategory} = useGlobal()
        
    useEffect(() => {
      getProductsByCategory(selectedCategory)
      .then(item => setProducts({
        products:item,
        isLoad:true
      }));
      }, [selectedCategory]);


    return (
      <>
        <div className='product-container' >  
        {isLoad ? products.map((item)=>(
            <ProductCard key={item.id} item={item} /> 
          )):[...Array(10)].map((_,idx)=><PcSkletonLoader key={idx}/>)}
        </div>
      </>
    );
  };
  
  export default CategoryProducts;
  

  