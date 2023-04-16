import Coupon from './coupon.jsx'

 function Coupons (props){
    const our_coupons=props.coupons;
        return (
      <div className="coupons flex_row">
       {our_coupons.map((single_coupon)=>(<Coupon key={single_coupon.coupon_id} coupon={single_coupon}/>))}
      </div>
    )
  }

  export default Coupons