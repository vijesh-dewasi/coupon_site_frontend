import React from "react";
import './coupon.css';
import { useState } from "react";


//need to take look at  issues such icons for tag 

function Coupon(props) {

  const {
    coupon_id,
    brand,
    isverified,
    islimited,
    coupon_title,
    coupon_desc,
    logo_url,
    coupon_code,
    availability,
    redirection_link } = props.coupon;

  const [expand_visible, set_expand] = useState(0);

  function Expanded_coupon() {

    function copy_button_handler(e) {
      navigator.clipboard.writeText(coupon_code)
      e.target.innerText = "copied";
    }

    return (
      <div className="exp_overlay" style={{ display: expand_visible ? "inline" : "none" }}>

        <div className="expanded_coupon flex_col">

          <div className="cross_mark">
            <a onClick={() => (set_expand(0))}>
              <i className="fa-regular fa-circle-xmark"></i>
            </a>
          </div>

          <div className="detail_logo ">
            <div className="logo_img_holder">
              <img className="logo_img" src={logo_url} alt="kuch_bhi" />
            </div>

            <div className='coupon_desc flex_col'>
              <h3>
                {coupon_title}
              </h3>
              <p className="">{coupon_desc}</p>
            </div>

          </div>

          <div className="copy_code flex_row">

            <div className="flex_row coupon_copier">
              <div className="coupon_code">
                {coupon_code}
              </div>
              <button onClick={copy_button_handler} className="copy_btn">Copy Code</button>
            </div>
          </div>
          <a href={redirection_link}>Visit Site</a>
        </div>


      </div>
    )
  }


  return (

    <div className='container flex_col'>
      <Expanded_coupon />
      <div className='coupon_info_bar flex_row'>

        { isverified?
        <div className="coupon_tag flex_row">
           <p>Verfied</p>
          <div className="tag_img_holder">
           <img className="tag_img" src="./images/verified.png" alt="" />
          </div>
        </div>:""
        }

        {islimited ?
        <div className="coupon_tag flex_row">
          <p >
             Exclusive 
          </p>
          <div className="tag_img_holder">
          <img className="tag_img" src="./images/limited.png" alt="" />
          </div>
        </div>: "regular"
        }
        {(brand.length > 0) ?
        <div className="coupon_tag flex_row">
          <p>
             {brand} 
          </p>
          <div className="tag_img_holder">
           <img className="tag_img" src="./images/brand-image.png" alt="" />
          </div>
        </div>
        : ""}



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
              <img className="logo_img" src={logo_url} alt="kuch_bhi" />
            </div>
            <button onClick={() => (set_expand(1))} className='fancy_button' href="#">check coupon</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Coupon  