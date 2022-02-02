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
    const [cartItem, setCartItem] = useState([])

    const onAdd = (obj)=>{
        let exist = cartItem.find((item)=> item.id === obj.id)

        if(exist){
            setCartItem(
            cartItem.map((item)=> item.id === obj.id ? {...exist, qty:exist.qty + 1} :item)
            );
        } else{
            setCartItem([...cartItem,{...obj, qty:1}])
        }
    }
   
    const onRemove = (obj)=>{
        let exist = cartItem.find((item)=> item.id === obj.id)
        
        
        setCartItem(
            cartItem.map((item)=>(
                item.id === obj.id ? {...exist,qty:exist.qty===1 ? 1:exist.qty - 1}: item
            ))
        ) 
    }
    const removeBtn = (obj)=>{
        setCartItem(
            cartItem.filter(item=>item.id !== obj.id)
        )
    }

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
            subTotal, setSubTotal,
            cartItem, setCartItem,
            onAdd,onRemove,removeBtn

        }}>
            {children}
        </context.Provider>
    )
}


