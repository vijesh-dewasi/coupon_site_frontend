import Coupons from "./coupons";
import {React, useState, useEffect } from "react";


function Allcoupons(props) {

  const API = 'https://coupon-site-server.vercel.app/categories';
  const [coupons_list, setcouponlist] = useState([]);

  var all_cat = {};
  function updatelist() {
    setcouponlist([])
    all_cat
      .forEach((category) => {
        category.coupons
          .forEach((our_coupon) => {
            setcouponlist(coupons_list => [...coupons_list, our_coupon])
          })
      })
  }

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        all_cat = res;
      })
      .then(() => {
        updatelist()
      })
  }, [])

  return (
    <>
      <h2 className='fancy_text'>--ALL coupons--</h2>
      <Coupons coupons={coupons_list} />
    </>
  )

}

export default Allcoupons