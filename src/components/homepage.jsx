import './homepage.css'
import React, {useState,useEffect} from 'react'
import Filteredcoupon from './filtercoupon'



//just bare structure yet to completed

const Homepage = function () {
    const [activeTab, setActiveTab] = useState({ name: "mostLiked" });

    const tab_style = {
        backgroundColor: "var(--CouponBackground)",
        borderBottom: "5px solid var(--CouponBackground)",
        marginBottom: "-5px",
        borderRadius: "-30px"
    }
    

    const handleTabChange = function (e) {
        const tag_name = e.target.tagName
        const tab = {
            name: "limited"
        }
        if (tag_name === "DIV") {
            tab.name = e.target.id;
        }
        else {
            tab.name = e.target.parentElement.id;
        }
        setActiveTab(tab)
    }
     
    return (
        <React.Fragment>
            <div className="tabs_holder flex_row">

                <div onClick={(e) => handleTabChange(e)} className="tab_holder flex_row" id="mostLiked" style={activeTab.name == "mostLiked" ? tab_style : {}}>

                    <p className="tab_title">
                        most liked
                    </p>
                    <img className="tab_icon" src="/images/most_liked_tab.png" alt="kuch_bhi" />

                </div>
                <div onClick={(e) => handleTabChange(e)} className="tab_holder flex_row" id="limited" style={activeTab.name == "limited" ? tab_style : {}}>
                    <p className="tab_title">
                        limited
                    </p>
                    <img className="tab_icon" src="/images/limited_tab_1.png" alt="kuch_bhi" />
                </div>
                <div onClick={(e) => handleTabChange(e)} className="tab_holder flex_row" id="free" style={activeTab.name == "free" ? tab_style : {}}>
                    <p className="tab_title">
                        free
                    </p>
                    <img className="tab_icon" src="/images/free_tab.png" alt="kuch_bhi" />
                </div>
            </div>
              <Filteredcoupon filter={activeTab} />;           
        </React.Fragment>
    )
}

export default Homepage