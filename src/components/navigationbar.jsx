import './navigationbar.css';
import React from 'react';
import { useState ,useEffect} from 'react';
import {NavLink} from 'react-router-dom'

//this component can use below routes
// --/categories/(category_name)
// --/home
// /brand store

//I need to create pages for brand store and login page
//further the routes would be /brand store && /login or /signup 

export default function () {
    
    const [category_list] = useState([]);    
   
    const API = '/categories';
  var all_cat={};
  function updatelist(){
  all_cat
  .forEach((category)=>{
  category_list.push(category.id);
  })
  }

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then( (res) => {
      all_cat=res;   
    })
    .then(()=>{
      updatelist() 
       })
  },[])

    const [toggle, setactive] = useState(0);
    const [dropdown, setdropdown] = useState(0);

    const our_site_logo="/images/logo.png";
     
   function Categories(){
    var count=1;
   return dropdown?(
    <ul className='nav_items flex_col drop_menu'>
    {category_list.map((category)=>{
        const category_link= "/categories/"+category
    return (
    <li key={count++} className='nav_item'>
    <NavLink className='nav_link' to={category_link}>{category}</NavLink>
    </li>
    )
    })}
    </ul>
   ):"";
    }

    return (
        <div>
            <nav className="nav_container flex_row">
                <a className='nav_brand' href="/"><img src={our_site_logo} alt="logo" /></a>
                <ul className='nav_items flex_row'>
                    <li className='nav_item'><a onClick={() => (setactive(!toggle))} className="nav_toggler"><i className="fa-solid fa-bars fa-xl"></i></a></li>
                    <div className={toggle ? "nav_links_container flex_row active" : "nav_links_container flex_row"}>
                        <li className='nav_item'><a className="nav_link" href="/">HOME</a></li>
                        <li onClick={() => (setdropdown(!dropdown))} className='nav_item'>
                        <a className="nav_link">CATEGORIES
                        <i className="fa-solid fa-caret-down fa-lg"></i>
                        </a>
                        <Categories />
                        </li>
                        <li className='nav_item'><NavLink className="nav_link" to="/brand store">BRAND STORE</NavLink></li>
                        <li className='nav_item'><NavLink className="nav_link" to="/login">LOGIN</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}