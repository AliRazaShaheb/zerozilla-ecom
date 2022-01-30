import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedProducts } from '../api/allAPIs';
import { rateFormatter } from '../api/RateFormatter';

const ProductDetails = ({selectedProduct}) => {
// let urlParam = useParams()
// console.log(urlParam.id)

const [choosenProduct, setChoosenProduct] = useState([])
useEffect(()=>{
  getSelectedProducts(selectedProduct)
  .then(result => setChoosenProduct(result))
},[selectedProduct])


const value = choosenProduct?.rating?.rate == 'undefined'?choosenProduct?.rating?.rate:choosenProduct?.rating?.rate

const count = choosenProduct?.rating?.count == 'undefined'?choosenProduct?.rating?.count:choosenProduct?.rating?.count

const starRatingValue = 0.82*value



  return (
    <div className='product-details'>
          <div className="pd-img-container">
            <img src={choosenProduct.image} alt={choosenProduct.title} />
          </div>
          <div className="pd-content">
            <h3>{choosenProduct.title}</h3>
            <div className="stars1">
              <span className="fill-star" style={{width:`${starRatingValue}rem`}}>★★★★★</span>
              <span className="empty-star">★★★★★</span>
              <h6>{count}</h6>
            </div>
            <p className='desc'>{choosenProduct.description}</p>
            <div className="price-rate">
            <p> <span>₹</span>{rateFormatter(choosenProduct.price) } </p>
              <button>Add to Cart</button>
            </div>
          </div>
      
    </div>
  );
};

export default ProductDetails;
