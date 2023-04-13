import React from 'react';
import "./footer.css"

export default function () {
    return(
    <div className="flex_col footer_container">
          <div className='logo_holder flex_row'>
        <img src="./images/logo.png" alt="logo" />
          </div>
    
        <div className='flex_row social_media_links'>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
        </div>
    </div>)
}