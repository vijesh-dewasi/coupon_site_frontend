import Coupons from "./coupons";
import { useState,useEffect} from "react";


function Allcoupons(){ 

const API = 'http://localhost:3001/categories';
const [coupons_list, setcouponlist] = useState([]);

  var all_cat={};
  function updatelist(){
    setcouponlist([]) 
  all_cat
  .forEach((category)=>{
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

  return(
    <Coupons coupons={coupons_list} />
  ) 

}

export default Allcoupons