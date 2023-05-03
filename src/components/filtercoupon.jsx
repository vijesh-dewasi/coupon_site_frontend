import React, { useEffect, useState } from "react";
import Allcoupons from "./allcoupons";
import Coupons from "./coupons";
import { useActionData } from "react-router-dom";

const Filteredcoupon = function (props) {
    const [coupons_list, setcouponlist] = useState([]);
    const filter_name=props.filter.name;
    const API = '/tab_filters/'+filter_name;
    
    var cat = {};
    function updatelist() {
        const retrived_coupons = cat;
        setcouponlist([]);
        retrived_coupons.forEach((coupon) => {
            setcouponlist(coupons_list => [...coupons_list, coupon])
        })
    }
    useEffect(() => {
        console.log(API)
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