import React from 'react';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'

const ProductDetailsSkletonLoader = () => {


  return <>
    <div className='product-details' >
    {<SkeletonTheme baseColor='#b6966c' highlightColor="#c7a375" borderRadius={5}>
      <div className="pd-img-container" >
        <div> 
          <Skeleton count={1} style={{width:"100%", height:"20rem"}}/> 
        </div>
      </div>
      <div className="pd-content" style={{border:"none"}} >
        <div style={{width:"100%"}}>{<Skeleton />}</div>
          <div className="stars1" >
            <div>{<Skeleton count={1} style={{width:"10rem"}}/>}</div>
          </div>
        <p className='desc'>{<Skeleton count={5} />}</p>
        <div className="price-rate">
          {<Skeleton count={1} style={{width:"10rem"}}/>}
          <div>{<Skeleton count={1} style={{width:"5rem"}}/>}</div>
        </div>
      </div>
    </SkeletonTheme>}
    </div>;
  </>
};

export default ProductDetailsSkletonLoader;
