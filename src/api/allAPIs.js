
//all categories
export const getAllCategories = async () => {
    return fetch('https://fakestoreapi.com/products/categories')
                            .then(res=>res.json())
                            .then(json=>json)
};


//products from single category [single category]
export const getProductsByCategory = async (selectedCategory) => {
    return fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>json)
};


// all products

export const getAllProducts = async () => {
    return fetch('https://fakestoreapi.com/products')
                            .then(res=>res.json())
                            .then(json=>json)
};


// selected product [single product]
export const getSelectedProducts = async (pid) => {
    return fetch(`https://fakestoreapi.com/products/${pid}`)
                            .then(res=>res.json())
                            .then(json=>json)
};