import React from "react";
import './profile.css'
import {NavLink} from 'react-router-dom'

function profile(props){
  console.log(props)
const profile_name=props.data[0].user_mail;
const points=props.data[0].total_points;
const uploaded_coupon=props.data[0].coupons_uploaded.count;
const received_coupon=props.data[0].coupons_received.count;
const imgurl="/images/demo.jpeg";
const favourites_url="/favourites/"+profile_name;

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


<NavLink className="fancy_button" to="/addcoupon">
{/* {uploaded_coupon>1?"upload_more_coupons":"upload your first coupon"} */}
upload coupons
</NavLink>

<NavLink className="fancy_button" to="/">
logout
</NavLink>

<NavLink className="fancy_button" to={favourites_url}>
YOUR_FAVOURITES 
</NavLink>


</div>

)
}

export default profile