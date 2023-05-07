import React,{useState,useEffect} from "react";
import './addcoupon.css'

const Addcoupon=function(props){

  const [couponBody, setcouponBody] = 
  useState({ 
  coupon_code:"",
  company_name: "",
  isverified:0, 
  islimited: 0,
  coupon_title: "",
  coupon_desc: "",
  validupto:Date(),
  redirection_link: ""
})

    
   
    async function handlesubmit(e) {
        //for now doing nothing with the response after post request later will authenticate
        e.preventDefault();
        await fetch("/addcoupon",{
            method: "POST", 
            body: JSON.stringify(couponBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(()=>{
          setcouponBody({
            coupon_code:"",
            company_name: "",
            isverified:0, 
            islimited: 0,
            coupon_title: "",
            coupon_desc: "",
            vaildupto:Date(),
            redirection_link: ""})
        }) 
    }

    function handleChange(e){
        const input_name = e.target.name
        const update = e.target.value
        setcouponBody({...couponBody,[input_name]:update}) 
        console.log(couponBody)
    }

    return(
        <div className="form_holder flex_row">
        <form onSubmit={handlesubmit} className="post_form flex_col" action="/post" method="post">

          <label  className="input_lables" htmlFor="couponcode">coupon code</label>
          <input  onChange={handleChange} type="text" name="coupon_code" id="couponcode" />

          <label className="input_lables"  htmlFor="company_name">company</label>
          <input onChange={handleChange}  type="text" name="company_name" id="company_name" />
         
          <label className="input_lables"  htmlFor="Title">Title</label>
          <textarea onChange={handleChange} name="coupon_title" id="Title" rows="4" cols="35"/>

          <label className="input_lables"  htmlFor="Description">Description</label>
          <textarea  onChange={handleChange}  name="coupon_desc" id="Description" rows="8" cols="35"/>
          
          <label className="input_lables"  htmlFor="redirectionLink">Re Direction LINK</label>
          <input onChange={handleChange}  type="url" name="redirection_link" id="redirectionLink" />          

          <label className="input_lables"  htmlFor="validupto">valid up to</label>
          <input onChange={handleChange}  type="date" name="validupto" id="validupto" />

          <input className="submiter" type="submit" name="submit_btn" id="submit_btn" />

        </form>
        </div>
    )
}

export default Addcoupon