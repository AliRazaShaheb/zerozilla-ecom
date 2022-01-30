import React,{useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { getProductsByCategory } from '../api/allAPIs';
import ProductCard from '../components/ProductCard';
import { useGlobal } from '../context/Context';


const CategoryProducts = () => { 
    const [products, setProducts] = useState([])
    const {selectedCategory} = useGlobal()
        
    useEffect(() => {
      getProductsByCategory(selectedCategory)
      .then(item => setProducts(item));
      }, [selectedCategory]);
   

    return (
      <>
        <div className='product-container' >
          {products.map((item)=>(
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
          <Outlet />
      </>
    );
  };
  
  export default CategoryProducts;
  