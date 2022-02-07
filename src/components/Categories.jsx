import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../context/Context";


const Categories = () => { 

   const{isCategoryLoad,category,setShowProducts, setSelectedCategory,
     setShowAllProducts, showAllProducts, setrouteAllProducts} = useGlobal()

  const getCategoryName = (obj)=>{
    setShowProducts(true)
    setSelectedCategory(obj)
    setShowAllProducts(false)
  }

  const showAll = ()=>{
    setrouteAllProducts(true)
    setShowAllProducts(false)
  }

  return (
    <div className='categories-container' >
      <NavLink to={`/products`} className={({isActive})=>isActive || showAllProducts ? "category-links item active" : "category-links item"} key="All" onClick={()=>showAll()}>
        <div >All</div>
      </NavLink>
        {isCategoryLoad?category.map((item)=>(
          <NavLink to={`${item}`.replace(" ","-")} className={({isActive})=>isActive ? "category-links item active" : "category-links item"} key={item} onClick={()=>getCategoryName(item)}>
              <div>{item}</div>
          </NavLink>
          )): [...Array(4)].map((_,idx)=>(<Skeleton style={{width:"6rem", lineHeight:"2"}} key={idx}/>))}
    </div>
  );
};

export default Categories;
