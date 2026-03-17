import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
