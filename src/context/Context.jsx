import { createContext, useContext, useState, useEffect } from "react";
import { getAllCategories, getAllProducts } from "../api/allAPIs";


const context = createContext()

export function useGlobal(){
    return useContext(context)
}

export const ContextProvider = ({children})=>{
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [showProducts, setShowProducts] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [routeAllProducts, setrouteAllProducts] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
   
    

    useEffect(() => {
        getAllCategories().then((item=>(
            setCategory(item)
        )))
        getAllProducts().then(result => setAllProducts(result))
        
      }, []);



    return (
        <context.Provider value={{
            category,setCategory,
            selectedCategory,setSelectedCategory,
            selectedProduct,setSelectedProduct,
            showProducts,setShowProducts,
            allProducts, setAllProducts,
            routeAllProducts, setrouteAllProducts,
            showAllProducts, setShowAllProducts,
            subTotal, setSubTotal



        }}>
            {children}
        </context.Provider>
    )
}


