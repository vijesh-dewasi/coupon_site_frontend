import './App.css'
import React from 'react'
import Navigationbar from './navigationbar.jsx'
import Footer from './footer.jsx'
import Coupons from './coupons.jsx'
import { useState,useEffect} from 'react';
import Login_page from './login.jsx';

// function Place_holder(){    
//   return (
//     <div style={{
//       width: 100+'vw',
//       height:100+'vh'
//     }
//   }>
//   </div>   
//     )
// }

function App() {

  const [coupons_list,setcouponlist]=useState([]);
  const [category_list]=useState([]);

  //all category retrival start
  //the below thing was for retrival of all coupon of all categories
  
  const API = 'http://localhost:3001/categories';
  var all_cat={};
  function updatelist(){
    setcouponlist([]) 
  all_cat
  .forEach((category)=>{
  category_list.push(category.id);
  category.coupons
  .forEach((our_coupon)=>{
        setcouponlist(coupons_list=>[...coupons_list,our_coupon])
      })})
  }
  
  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then( (res) => {
      all_cat=res;   
    })
    .then(()=>{
      updatelist() 
       })
  },[])
  
  // all category retrival end

  //category wise retrival 

  // const API = 'http://localhost:3001/categories/furniture';
  // var cat={};
  // function updatelist(){ 

  // const retrived_coupons=cat.coupons;

  // retrived_coupons.forEach((coupon)=>{
  // setcouponlist(coupons_list=>[...coupons_list,coupon])
  // })
  // }

  // useEffect(() => {
  //   fetch(API)
  //   .then((res) => res.json())
  //   .then( (res) => {
  //     cat=res;   
  //   })
  //   .then(()=>{
  //     updatelist() 
  //      })
  // },[])

//category retrival end

  return (   
    <div className="app">
      <Navigationbar key="1" categories={category_list} />
      {/* <Coupons coupons={coupons_list} /> */}
      <Login_page/>
      <Footer />
    </div>
  )
}

export default App;