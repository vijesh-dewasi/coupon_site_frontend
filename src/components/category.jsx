import {useParams} from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';
import Coupons from './coupons';
import './category.css'

function Category(){
    
    const [coupons_list, setcouponlist] = useState([]);
    const category = useParams().category_name;

    const API = 'http://localhost:3001/categories/'+category;

    var cat={};
    
    function updatelist(){ 
    setcouponlist([]);
  const retrived_coupons=cat.coupons;
  retrived_coupons.forEach((coupon)=>{
  setcouponlist(coupons_list=>[...coupons_list,coupon])
  })
  }

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then( (res) => {
      cat=res;   
    })
    .then(()=>{
      updatelist() 
       })
  },[category])

    return (
    <React.Fragment>
       <h2 className='fancy_text'>--{category}--</h2>
       <Coupons coupons={coupons_list}/>
       </React.Fragment>
    )
}

export default Category 