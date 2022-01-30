import React,{useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Categories from '../components/Categories';
import { getAllProducts } from '../api/allAPIs';
import ProductCard from '../components/ProductCard';
import { useGlobal } from '../context/Context';
import { AllProducts } from './AllProducts';
import Cart from './Cart';


const Home = () => {
  const {setRemoveAllProducts,showAllProducts,setShowAllProducts,setrouteAllProducts } = useGlobal()
  const [showCategory, setShowCategory] = useState(true);

  useEffect(()=>{
    setShowAllProducts(true)
    setShowCategory(true)
  },[])

  const cartHandle = ()=>{
    setShowAllProducts(false)
    setrouteAllProducts(false)
    setShowCategory(false)
  }
  const homeLoad = ()=>{
    setShowAllProducts(true)
    setShowCategory(true)
  }

  return (
    <>
        <nav>
        <Link to="/" className='pd-links' onClick={homeLoad} >
          <h1>ZeroZilla</h1>
        </Link>
          
          <div className="icons">
            {/* cart */}
            <Link to="/cart" className='pd-links'>
              <div className="iconbg" onClick={cartHandle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cart-icon" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div className='cart-counter'><span>{1}</span></div>
              </div>
            </Link>

            {/* profile */}
            <div className="iconbg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="profile" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
          </div>
        </nav>
        {showCategory && (
          <section>
          <h3>All Product Categories</h3>
          <Categories />
        </section>
        )}
        
        {showAllProducts && (
          <section>
            <h3>All Products</h3>
            <AllProducts />
          </section>
        )}
            
        <Outlet />
    </>
  );
};

export default React.memo(Home);
