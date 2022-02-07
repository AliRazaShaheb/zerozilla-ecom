import { createContext, useContext, useState, useEffect } from "react";
import { getAllCategories, getAllProducts } from "../api/allAPIs";


const context = createContext()

export function useGlobal(){
    return useContext(context)
}

export const ContextProvider = ({children})=>{
    const [{isCategoryLoad,category}, setCategory] = useState({category:[],isCategoryLoad:false})
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [showProducts, setShowProducts] = useState(false)
    const [{isLoad,allProducts}, setAllProducts] = useState({isLoaded:false, allProducts:[]})
    const [routeAllProducts, setrouteAllProducts] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [localStorageCartItem, setLocalStorageCartItem] = useState([])
    const [productLoader, setProductLoader] = useState(false)
    

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
        getAllCategories().then(item=>setCategory({
                category:item,
                isCategoryLoad:true
        }))
        getAllProducts().then(result => setAllProducts({
            allProducts:result,
            isLoad:true
        }))
        

      }, []);



    return (
        <context.Provider value={{
            isCategoryLoad,category,setCategory,
            selectedCategory,setSelectedCategory,
            selectedProduct,setSelectedProduct,
            showProducts,setShowProducts,
            isLoad,allProducts, setAllProducts,
            routeAllProducts, setrouteAllProducts,
            showAllProducts, setShowAllProducts,
            cartItem, setCartItem,
            productLoader, setProductLoader,
            onAdd,onRemove,removeBtn,
            localStorageCartItem, setLocalStorageCartItem

        }}>
            {children}
        </context.Provider>
    )
}


