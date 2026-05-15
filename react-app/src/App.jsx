import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shimmer from './components/Shimmer.jsx'
import { getProducts } from "./components/data.js"
import ProductList from './Pages/ProductList.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import Cart from './Pages/Cart.jsx';
import Header from './components/Header.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import SearchBox from './components/SearchBox.jsx';
import ThemeProvider from './context/ThemeContext.jsx';
import UserLogin from './Pages/UserLogin.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [IsLogin, setIsLogin] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeCart = (id) => {
    const remove = cart.filter(p => p.id !== Number(id));
    setCart(remove);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        {!IsLogin ? (
          <Routes>
            <Route path="*" element={<UserLogin onLogin={() => setIsLogin(true)} />} />
          </Routes>
        ) : (
          <div className="app-container">
            <Header cartCount={cart.length} />
            <div className="main-layout">
              <Sidebar />
              <div className="main-content">
                <SearchBox onSearch={setSearch} />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/" element={<ProductList products={products} searchItem={search} />} />
                  <Route path="/category/:categoryName" element={<ProductList products={products} searchItem={search} />} />
                  <Route path="/products/:id" element={<ProductDetail products={products} addToCart={addToCart} removeCart={removeCart} />} />

                  <Route path="/cart" element={<Cart cart={cart} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


