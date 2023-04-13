import React from "react";
import './coupon.css';

//need to take loo at two issues logo display and the tag font awesome

export default function () {
  
  const coupon_id=3;

  //try to captilixe first letter for below three
  const brand ="Amazon"; 
  const isverified = true; 
  const islimited = true;
  
  //fully capitalize the coupon title
  const coupon_title = "50% OFF ON SALE";
  const coupon_desc = "we discount";
  const img_url = "public\images\avatar.png";


  const logo_styles={
    backgroundImage:`url(${img_url})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center"
  }

  return (
    <div className='container flex_col'>
      <div className='coupon_info_bar flex_row'>

      <p className="coupon_tag">
      {isverified ? "Verfied": "unverified"}
      </p>
       
      <p className="coupon_tag">
      {islimited ? "Exclusive" : "unlimited"}
      </p>
       
      <p className="coupon_tag">
       {(brand.length>0)?brand:""}
       </p>
      
      </div>

      <div className='coupon_box'>

        <div className='coupon_grid'>
          <div className='coupon_desc flex_col'>
            <h2>
              {coupon_title}
            </h2>
            <p className="">{coupon_desc}</p>
          </div>
          <div className="logo_button flex_col">
           <div className="logo_img_holder" style={{logo_styles}}>
            </div>
            <button className='fancy_button' href="#">check coupon</button>
          </div>

        </div>
      </div>
    </div>
  )
}
