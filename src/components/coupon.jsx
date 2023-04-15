import React from "react";
import './coupon.css';


//need to take loo at two issues logo display and the tag font awesome

export default function () {
  
  const coupon_id=3;

  //try to captilixe first letter for below three
  const brand ="Amazon"; 
  const isverified = 1; 
  const islimited = 1;
  
  //fully capitalize the coupon title
  const coupon_title = "50% OFF ON SALE with the buy get one offer";
  const coupon_desc = "we discount the same discoinvdv dkjfndsd lorem ipsm kfgnd  fnnklf kdnfg fkg  ";
  const img_url ="./images/demo.jpeg";


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
      {isverified && "verfied" }
      </p>
       
      <p className="coupon_tag">
      {islimited ? "exclusive"  : "regular"}
      </p>
       
      <p className="coupon_tag">
       {(brand.length>0)?brand:""}
       </p>
      
      </div>

      <div className='coupon_box'>

        <div className='coupon_grid'>
          <div className='coupon_desc flex_col'>
            <h3>
              {coupon_title}
            </h3>
            <p className="">{coupon_desc}</p>
          </div>

          <div className="logo_button flex_col">

           <div className="logo_img_holder">
           <img className="logo_img" src={img_url} alt="kuch_bhi"/>
            </div>

            <button className='fancy_button' href="#">check coupon</button>
          </div>

        </div>
      </div>
    </div>
  )
}
