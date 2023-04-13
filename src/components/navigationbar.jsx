import './navigationbar.css';
import React, { useState } from 'react';

// a category list is meant to be sent this component through the props

//this component can  use below routes
// --/categories/(category_name)
// --/home

export default function (props) {
    //    const category_list = props.categories;
    const category_list = ["link1", "link2", "link3"];// dummy fo now
   
    const [toggle, setactive] = useState(0);
    const [dropdown, setdropdown] = useState(0);
     
   function Categories(){
   return dropdown?(
    <ul className='nav_items flex_col drop_menu'>
    {category_list.map((category)=>{
        const category_link= "/categories/"+category
    return (
    <li className='nav_item'><a className="nav_link" href={category_link}>{category}</a></li>
    )
    })}
    </ul>
   ):"";
    }

    return (
        <div>
            <nav className="nav_container flex_row">
                <a className='nav_brand'><img src="./images/logo.png" alt="logo" /></a>
                <ul className='nav_items flex_row'>
                    <li className='nav_item'><a onClick={() => (setactive(!toggle))} className="nav_toggler" href="#"><i className="fa-solid fa-bars fa-xl"></i></a></li>
                    <div className={toggle ? "nav_links_container flex_row active" : "nav_links_container flex_row"}>
                        <li className='nav_item'><a className="nav_link" href="#">HOME</a></li>
                       
                        <li onClick={() => (setdropdown(!dropdown))} className='nav_item'>
                        <a className="nav_link" href="#">CATEGORIES
                        <i className="fa-solid fa-caret-down fa-lg"></i>
                        </a>
                        <Categories />
                        </li>
                        <li className='nav_item'><a className="nav_link" href="#">BRAND STORE</a></li>
                        <li className='nav_item'><a className="nav_link" href="#">LOGIN</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}