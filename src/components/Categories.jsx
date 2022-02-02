import { NavLink } from "react-router-dom";
import { useGlobal } from "../context/Context";


const Categories = () => { 

   const{category,setShowProducts, setSelectedCategory,
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
      <NavLink to={`/products`} className={({isActive})=>isActive || showAllProducts ? "category-links item active" : "category-links item"} key="All" >
        <div onClick={showAll} >All</div>
      </NavLink>
        {category.map((item)=>(
          <NavLink to={`${item}`.replace(" ","-")} className={({isActive})=>isActive ? "category-links item active" : "category-links item"} key={item} >
              <div onClick={()=>getCategoryName(item)} >{item}</div>
          </NavLink>
          ))}
    </div>
  );
};

export default Categories;
