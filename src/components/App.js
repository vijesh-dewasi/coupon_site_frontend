import './App.css';
import React from 'react';
import Navigationbar from './navigationbar.jsx'
import Footer from './footer.jsx'
import Coupons from './coupons.jsx'
import { useState,useEffect} from 'react';

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
// const category = [
//   {
//     stores: [
//       {
//         coupon_id: 1,
//         brand: "flipkart",
//         isverified: 1,
//         islimited: 1,
//         coupon_title: "20% off on purchasing at the max mrp",
//         coupon_desc: "we make u fool very efficiently without leeting u know anything that called tactics with our specialized cell called chutiya banao meme nhi",
//         logo_url: "./images/demo.jpeg",
//         coupon_code: "1425654",
//         availability: "24 days",//this thing must be found using expiry_date or (issue date & remaining days)
//         redirection_link: "www.amazon.com"
//       }]
//   },
//   {
//     mobile: [
//       {
//         coupon_id: 2,
//         brand: "",
//         isverified: 0,
//         islimited: 1,
//         coupon_title: "20% off on purchasing at the max mrp",
//         coupon_desc: "we make u fool",
//         logo_url: "./images/avatar.png",
//         coupon_code: "142563",
//         availability: "24 days",//this thing must be found using expiry_date or (issue date & remaining days)
//         redirection_link: "www.amazon.com"
//       },
//       {
//         coupon_id: 3,
//         brand: "slipkart",
//         isverified: 0,
//         islimited: 1,
//         coupon_title: "20% off on purchasing at the max mrp",
//         coupon_desc: "we make u fool",
//         logo_url: "./images/logo.png",
//         coupon_code: "142563",
//         availability: "24 days",//this thing must be found using expiry_date or (issue date & remaining days)
//         redirection_link: "www.amazon.com"
//       }
//     ]
//   },

//   {
//     electronics: [
//       {
//         coupon_id: 4,
//         brand: "clipkart",
//         isverified: 0,
//         islimited: 1,
//         coupon_title: "20% off on purchasing at the max mrp",
//         coupon_desc: "we make u fool",
//         logo_url: "./images/demo.jpeg",
//         coupon_code: "142563",
//         availability: "24 days",//this thing must be found using expiry_date or (issue date & remaining days)
//         redirection_link: "www.amazon.com"
//       }
//     ]
//   },

//   {
//     furniture: [
//       {
//         coupon_id: 5,
//         brand: "sleepwell",
//         isverified: 0,
//         islimited: 1,
//         coupon_title: "a nice table at up to50%off",
//         coupon_desc: "we make u fool",
//         logo_url: "./images/demo.jpeg",
//         coupon_code: "142563",
//         availability: "24 days",//this thing must be found using expiry_date or (issue date & remaining days)
//         redirection_link: "www.amazon.com"
//       },
//       {
//         coupon_id: 6,
//         brand: "sleepwell",
//         isverified: 0,
//         islimited: 1,
//         coupon_title: "a nice chair at up to 10%off",
//         coupon_desc: "we make u fool",
//         logo_url: "./images/demo.jpeg",
//         coupon_code: "142563",
//         availability: "24 days",//this thing must be found using expiry_date or (issue date & remaining days)
//         redirection_link: "www.amazon.com"
//       }
//     ]
//   }
// ];

function App() {
  const [all_cat, setcat] = useState({});
  const [coupons_list,setcouponlist]=useState([]);
  const category_list=[];
  const API = 'http://localhost:3001/categories';

 const fetchcoupons = ()=>{
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setcat(res)
        return res
      }).then(()=>{
        updatelist()
      }
      )   
  }
  // console.log(Object.values(all_cat))
  useEffect(() => {
  fetchcoupons()
  },[])

  
  function updatelist(){ Object.values(all_cat).forEach(single_cat => { single_cat.forEach((our_coupon)=>{
        // setcouponlist([...our_coupon,our_coupon])
        setcouponlist(coupons_list=>[...coupons_list,our_coupon])
      })
    });
    // console.log(coupons_list)
  }
  
  // console.log(all_cat)

  return (   
    <div className="app">
      <Navigationbar category_list={category_list} />
      <Coupons coupons={coupons_list} />
      <Footer />
    </div>
  )
}

export default App;