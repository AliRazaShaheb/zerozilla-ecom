


//all categories
export const getAllCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
                            .then(res=>res.json())
                            .then(json=>json)
};


//products from single category [single category]
export const getProductsByCategory = (selectedCategory) => {
    return fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>json)
};


// all products

export const getAllProducts =  () => {

    return fetch('https://fakestoreapi.com/products')
                            .then(res=>res.json())
                            .then(json=>json)
};


// selected product [single product]
export const getSelectedProducts =  (pid) => {
    
    return  fetch(`https://fakestoreapi.com/products/${pid}`)
                            .then(res=>res.json())
                            .then(json=>json)
};