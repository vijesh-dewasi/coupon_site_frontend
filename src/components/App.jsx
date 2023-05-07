import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route,Link,
  useParam
} from 'react-router-dom'
import './App.css'
import Navigationbar from './navigationbar.jsx'
import Footer from './footer.jsx'
import { useState, useEffect } from 'react';
import Login_page from './login.jsx';
import Allcoupons from "./allcoupons.jsx"
import Homepage from "./homepage.jsx"
import Category from './category.jsx' 
import Signup from './signup.jsx'
import Addcoupon from './addcoupon.jsx'

function App() {
const [coupons_list, setcouponlist] = useState([]);
  return (
    <div className="app">
      <Router>
        <Navigationbar/>
        <Routes>
          <Route path="/login" element={<Login_page/>} />
          <Route path="/categories" element={<Allcoupons/>} />
          <Route path="/categories/:category_name" element={<Category/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/brand store" element={<Allcoupons/>} />
          <Route path="/signup" element={<Signup/>} />  
          <Route path="/addcoupon" element={<Addcoupon/>} />     
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;