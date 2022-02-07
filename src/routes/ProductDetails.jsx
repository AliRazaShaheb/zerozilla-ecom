import React,{useState, useEffect} from 'react';
import { getSelectedProducts } from '../api/allAPIs';
import { rateFormatter } from '../api/RateFormatter';
import ProductDetailsSkletonLoader from '../components/ProductDetailsSkletonLoader';
import { useGlobal } from '../context/Context';



const ProductDetails = ({selectedProduct}) => {
  
const {onAdd, } = useGlobal()
const [{isLoaded, data}, setChoosenProduct] = useState({
  data:[],
  isLoaded:false
})

useEffect(()=>{
  getSelectedProducts(selectedProduct)
  .then(item=>setChoosenProduct({
    data:item,
    isLoaded:true
  }))
},[selectedProduct])





  const value = data?.rating?.rate === 'undefined'?data?.rating?.rate:data?.rating?.rate

  const count = data?.rating?.count === 'undefined'?data?.rating?.count:data?.rating?.count

  const starRatingValue = 0.82*value


  return (
    <>
      {isLoaded 
        ? <div className='product-details'>
            <div className="pd-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="pd-content">
              <h3>{data.title }</h3>
              <div className="stars1">
                <span className="fill-star" style={{width:`${starRatingValue}rem`}}>★★★★★</span>
                <span className="empty-star">★★★★★</span>
                <h6>{count}</h6>
              </div>
              <p className='desc'>{data.description  }</p>
              <div className="price-rate">
              <p> <span>₹</span>{rateFormatter(data.price)} </p>
                <button onClick={()=>onAdd(data)} >Add to Cart</button>
              </div>
            </div>
        </div>
      : <ProductDetailsSkletonLoader />
      }
    </>
    

  );
};

export default ProductDetails;
