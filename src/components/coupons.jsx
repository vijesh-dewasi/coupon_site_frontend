import Coupon from './coupon.jsx'
import { useState } from 'react';
import React from 'react';


 function Coupons (props){
    const [our_coupons,set_coupons]=useState(props.coupons);
        return (
      <div className="coupons flex_row">
       {our_coupons.map((single_coupon)=>(<Coupon key={single_coupon.coupon_id} coupon={single_coupon}/>))}
      </div>
    )
  }

  export default Coupons