import React from "react";
import './profile.css'
import {NavLink} from 'react-router-dom'

function profile(props){
const profile_name="vijesh dewasi";
const points=10;
const uploaded_coupon=50;
const received_coupon=100;
const imgurl="/images/demo.jpeg";

return (
<div className="profile_container flex_col">
<div className="nameImg_box flex_row">
  <div className="profile_img_holder flex_row">
  <img className="profile_img" src={imgurl} alt="some_img"/>
  </div>
  <h4 className="profile_name">{profile_name}</h4>
</div>

<p className="profile_txt">points_earned: {points}</p>
<p className="profile_txt">no_coupon_uploaded:{uploaded_coupon}</p>
<p className="profile_txt">no_coupon_received:{received_coupon}</p>


{/* <div className="profile_btns flex_row"> */}

<NavLink className="fancy_button" to="/addcoupon">
{/* {uploaded_coupon>1?"upload_more_coupons":"upload your first coupon"} */}
upload coupons
</NavLink>

<NavLink className="fancy_button" to="/addcoupon">
logout
</NavLink>

{/* // </div */}


</div>

)
}

export default profile