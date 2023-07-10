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
import Brandstore from './brandstore.jsx'



function App() {


const [coupons_list, setcouponlist] = useState([]);
const [user_profile,setuser_profile]= useState({mail:"",points:0,no_of_coupon_uploaded:0,no_of_coupon_Received:0});

  return (
    <div className="app">
      <Router>
        <Navigationbar profile_data={user_profile} setfun={setuser_profile}/>
        <Routes>
          <Route path="/login" element={<Login_page setfun={setuser_profile} />} />
          <Route path="/categories" element={<Allcoupons/>} />
          <Route path="/categories/:category_name" element={<Category/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/brandstore" element={<Brandstore/>} />
          <Route path="/signup" element={<Signup/>} />  
          <Route path="/addcoupon" element={<Addcoupon user={user_profile}/> } />     
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;