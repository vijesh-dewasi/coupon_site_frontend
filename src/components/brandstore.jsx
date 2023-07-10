import React from 'react'
import { useState, useEffect } from 'react';
import Coupons from './coupons';
import './category.css'

function Category() {

  const [coupons_list, setcouponlist] = useState([]);
 
  const API = 'https://coupon-site-server.vercel.app/brandstore';

  var cat = {};

  function updatelist() {
    setcouponlist([]);
    const retrived_coupons = cat;
    console.log(retrived_coupons)
    retrived_coupons.forEach((coupon) => {
      setcouponlist(coupons_list => [...coupons_list, coupon])
    })
  }

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        cat = res;
      })
      .then(() => {
        updatelist()
      })
  }, [])

  return (
    <React.Fragment>
      <h2 className='fancy_text'>--Brand store--</h2>
      <Coupons coupons={coupons_list} />
    </React.Fragment>
  )
}

export default Category 