import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import { Checkout } from "./pages/Checkouut/Checkout";
import {Headerr} from "./pages/Header/Header";
import {Home} from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Orders } from "./pages/Orders/Orders";
import { Payment } from "./pages/Payment/Payment";import { Productlist } from "./pages/Productlist/Productlist";
import { Register } from "./pages/Register/Register";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";




function App() {
  
  return (
    <div>
      <Headerr/>
        <Routes>
          <Route path="/" element={
            
          <Home/>
          } />
          <Route path="/product/:id" element={<SingleProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/header" element={<Headerr/>}/>      <Route path="/orders" element={<Orders/>}/>
       <Route path="/payment" element={<Payment/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/products" element={<Productlist/>}/>
       </Routes>


    </div>
  );
}

export default App;
