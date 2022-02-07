import React from 'react';
import { Link } from 'react-router-dom';
import { rateFormatter } from '../api/RateFormatter';
import { useGlobal } from '../context/Context';

const ProductCard = ({item}) => {


  const {setSelectedProduct, setShowAllProducts, onAdd} = useGlobal()
  const starRatingValue = 0.82 * parseInt(`${item.rating.rate}`)

  const getProductId = ()=>{
    setSelectedProduct(item.id)
    setShowAllProducts(false)
    
  }
 
  

  return (
      <div className= 'pc-container'>
      <Link to={`${item.id}`.replace(" ","-")} className='pd-links' onClick={getProductId}>
        <div className="img-container">
            <img src={item.image} alt={item.title} />
        </div>
        <div className="pc-content">
            <h4>{item.title}</h4>
        </div>
        <div className="stars">
            <span className="fill-star" style={{width:`${starRatingValue}rem`}}>★★★★★</span>
            <span className="empty-star">★★★★★</span>
            <h6>{item.rating.count}</h6>
        </div>
      </Link>
      <div className="price-rate">
        <p> <span>₹</span>{rateFormatter(item.price) } </p>
        <button onClick={()=>onAdd(item)} >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
