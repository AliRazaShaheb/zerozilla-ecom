// import React,{useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import { getProductsByCategory } from '../api/allAPIs';
// import ProductCard from './ProductCard';

// const Products = ({selectedCategory}) => { 
//     const [products, setProducts] = useState([])
    
        
//     useEffect(() => {
//       getProductsByCategory(selectedCategory)
//       .then(item => setProducts(item));
//       }, [selectedCategory]);
   

//     return (
//         <div className='product-container' >
        
//           {products.map((item)=>(
//             <ProductCard key={item.id} item={item} />
//           ))}
//         </div>
//     );
//   };
  
//   export default Products;
  