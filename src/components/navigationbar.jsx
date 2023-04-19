import './navigationbar.css';
import React, { useState } from 'react';

//this component can  use below routes
// --/categories/(category_name)
// --/home
//I need to create pages for brand store and login page
//further the routes would be /brand store && /login or /signup 

export default function (props) {
    //    const category_list = props.categories;
    const category_list = props.category_list;// dummy fo now
   
    const [toggle, setactive] = useState(0);
    const [dropdown, setdropdown] = useState(0);
     
   function Categories(){
    var count=1;
   return dropdown?(
    <ul className='nav_items flex_col drop_menu'>
    {category_list.map((category)=>{
        const category_link= "/categories/"+category
    return (
    <li key={count++} className='nav_item'><a className="nav_link" href={category_link}>{category}</a></li>
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
                        <li className='nav_item'><a className="nav_link" href="/home">HOME</a></li>
                       
                        <li onClick={() => (setdropdown(!dropdown))} className='nav_item'>
                        <a className="nav_link" href="#">CATEGORIES
                        <i className="fa-solid fa-caret-down fa-lg"></i>
                        </a>
                        <Categories />
                        </li>
                        <li className='nav_item'><a className="nav_link" href="/brand store">BRAND STORE</a></li>
                        <li className='nav_item'><a className="nav_link" href="/login">LOGIN</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}