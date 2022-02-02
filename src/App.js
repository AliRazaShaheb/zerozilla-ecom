import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './routes/Home';
import Cart from './routes/Cart';
import ProductDetails from './routes/ProductDetails';
import ProfilePage from './routes/ProfilePage';
import CategoryProducts from "./routes/CategoryProducts";
import { useGlobal } from "./context/Context";
import { AllProducts } from "./routes/AllProducts";

function App() {
    
  const {showProducts, selectedCategory, selectedProduct, routeAllProducts} = useGlobal()
  
  
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path={`products`} element={
                routeAllProducts && (
                <section>
                  <h3 className="category-title">{`All Products`}</h3>
                  <AllProducts  />
                </section>) } /> 
                
              <Route path=":id" element={<ProductDetails selectedProduct={selectedProduct} />} />

              <Route path="products/:id" element={<ProductDetails selectedProduct={selectedProduct} />} />
                
              {showProducts && (
              <Route path={`${selectedCategory}`.replace(" ","-")} element={
                <section>
                  <h3 className="category-title">{`${selectedCategory} Products`}</h3>
                  <CategoryProducts  />
                </section> } >
                </Route>
                )}
              
              <Route path={`${selectedCategory}/:id`.replace(" ","-")} element={<ProductDetails selectedProduct={selectedProduct} />} />
              

              <Route path="cart" element={<section><Cart /></section>} />

              <Route path="profile-page" element={<ProfilePage />} />

              <Route
                path="*"
                element={
                  <main className="err-msg" >
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
