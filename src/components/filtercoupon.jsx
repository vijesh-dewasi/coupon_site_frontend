import React, { useEffect, useState } from "react";
import Allcoupons from "./allcoupons";
import Coupons from "./coupons";
import { useActionData } from "react-router-dom";

const Filteredcoupon = function (props) {
    const [coupons_list, setcouponlist] = useState([]);
    const filter_name=props.filter.name;
   
    
    //for now just making a default request to catefory wise later would just make commented api call
    var API = 'http://localhost:3001/categories/';
    // const API = 'http://localhost:3001/tab_filters/'+filter_name;

    if(filter_name==="free"){
        API=API+"furniture"
    }
    else if(filter_name==="mostLiked"){
        API=API+"stores"
    }
    else{
        API=API+"mobile"
    }
 


    var cat = {};
    function updatelist() {
        const retrived_coupons = cat.coupons;
        setcouponlist([]);
        retrived_coupons.forEach((coupon) => {
            setcouponlist(coupons_list => [...coupons_list, coupon])
        })
    }

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                cat = res;
            })
            .then(() => {
                updatelist()
            })
    }, [filter_name])

    return (
        <Coupons coupons={coupons_list} />
    )

}


export default Filteredcoupon;