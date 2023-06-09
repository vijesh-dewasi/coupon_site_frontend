import React from "react";
import './coupon.css';
import { useState } from "react";

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
  const verfied_icon_url="/images/verified.png"
  const limited_icon_url="/images/limited.png"
  const branded_icon_url="/images/brand-image.png"

 //for now we are setting the like state directly later we will check get it from a server for some user 
  const [liked, set_like_handle] = useState(0);
  const [review,setreview]=useState(-1);
  
  var thumb_click_count=0;

  const no_grey={
    filter: "grayscale(0%)"
  }  

  function Handle_like_toggle(){
  //here we would be needing to post some request to server if coupon is liked unliked
    set_like_handle(!liked)
  }

  

  function Expanded_coupon() {
    function copy_button_handler(e) {
      navigator.clipboard.writeText(coupon_code)
      e.target.innerText = "copied";
    }

    async function handle_feedback(e){
      const thumb= e.target.id;
      thumb_click_count++;
      if(review==-1){
       if(thumb=="upBtn")   
        setreview(1)
      else{
        setreview(0)
      }
      }
      else if(review==0){
        if(thumb=="upBtn")
        setreview(1)
        else
        setreview(-1)
      }
      else{
        if(thumb=="downBtn")
        setreview(0)
        else
        setreview(-1)
      }
      if(thumb_click_count==1){
        const post_review={
          coupon_id:coupon_id,
          review:thumb
          }
        e.preventDefault();
        await fetch("/review",{
            method: "POST", 
            body: JSON.stringify(post_review),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
      }
  }

    return (
      //I should have used the dialog html element instead
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
          <div className="link_feedback flex_row">
          <a href={redirection_link}>Visit Site</a>
          <img src={review==1?"/images/reviewed.png":"/images/thumb.png"} alt="up vote" onClick={handle_feedback}  className="feed_btn" id="upBtn" />
          <img src={review==0?"/images/reviewed.png":"/images/thumb.png"} alt="down vote" onClick={handle_feedback} className="feed_btn" id="downBtn" />
          </div>
        
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
           <img className="tag_img" src={verfied_icon_url} alt="" />
          </div>
        </div>:""
        }

        {islimited ?
        <div className="coupon_tag flex_row">
          <p >
             Exclusive 
          </p>
          <div className="tag_img_holder">
          <img className="tag_img" src={limited_icon_url} alt="" />
          </div>
        </div>: ""
        }
        {(brand.length > 0) ?
        <div className="coupon_tag flex_row">
          <p>
             {brand} 
          </p>
          <div className="tag_img_holder">
           <img className="tag_img" src={branded_icon_url} alt="" />
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
            <p className="">{coupon_desc.substring(0,29)+'...'}</p>
          </div>

          <div className="logo_button flex_col">

            <div className="logo_img_holder">
              <img className="logo_img" src={logo_url} alt="kuch_bhi" />
            </div>

            <div className="flex_row like_holder">
              <button onClick={() => (set_expand(1))} className='fancy_button' href="#">check coupon</button>     
              <button 
              onClick={()=>Handle_like_toggle()} 
              className="like_btn">
              <img className="like_img" src={liked?"/images/heart.png":"/images/greyh.png"} alt="heart" style={liked?no_grey:{}} />
              </button>   
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Coupon  