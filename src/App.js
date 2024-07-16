import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetails/ProductDetails";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ShowPage from "./pages/ShowPage/ShowPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route
              path="/product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/show/category/:id" element={<ShowPage />} />
            <Route path="/show/product/:query" element={<ShowPage />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
