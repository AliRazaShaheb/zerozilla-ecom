import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PcSkletonLoader = () => {
  return <SkeletonTheme baseColor='#b6966c' highlightColor="#c7a375" 
  borderRadius={5} >
  <div className='pc-container skleton'>
  
    <div className="img-container">
        <Skeleton count={1} style={{width:"100%", height:"10rem"}}/> 
    </div>

    <div className="pc-content">
        <div style={{width:"100%"}}>{<Skeleton />}</div>
    </div>

    <div className="stars2" >
            <div>{<Skeleton count={1} style={{width:"10rem"}}/>}</div>
    </div>
  
    <div className="price-rate">
        {<Skeleton count={1} style={{width:"3rem"}}/>}
        <div>{<Skeleton count={1} style={{width:"4rem"}}/>}</div>
    </div>
</div>
</SkeletonTheme>
;
};

export default PcSkletonLoader;
