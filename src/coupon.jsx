import React from "react";
import './coupon.css';

export default function (){
    const isverified=true;
    const coupon_title="some-brand-sdnfgkld dfmg "
    const coupon_desc="we discount the hiked amount hjd un dbn dfndf dfndfjbndfg"
    const img_url="./images/demo.png"
  return (
    <div className='container'>
    <div className='coupon_box'>
    <div className='coupon_info_bar'>
      <p className="simple_text">
      {isverified?"verified":"unverified"}
       </p>
    </div>
   <div className='cop_grid'>
      <div className='cop_desc'>
         <h2>
         {coupon_title}
         </h2>
         <p className="simple-text">{coupon_desc}</p>
      </div>
      <div className="logo_button">
      <img src={img_url}></img>
      <button className='fancy_button'>check coupon</button>
      </div>
    </div>
  </div>
  </div>
  )
}
