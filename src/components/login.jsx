import "./login.css"
import React, { useEffect } from "react"
import { useState } from "react"
import {
    Link,
    useParam
  } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

    


function Login_page(props) {

    const [cred, setcred] = useState({ mail: "", pass: "" })
    const [pass_err_msg,set_pass_msg]=useState("");
    let navigate = useNavigate(); 
   
    async function handlesubmit(e) {
        //for now doing nothing with the response after post request later will authenticate
        e.preventDefault();
        await fetch("https://coupon-site-server.vercel.app/login",{
            method: "POST", 
            body: JSON.stringify(cred),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            if(resp[0].user_mail==cred.mail){
                props.setfun(resp)
            navigate("/")
            }
            else{
                set_pass_msg("the credential didn't match to any one of data");
            }
        })
        .then(()=>{
        cred.mail="";
        cred.pass="";
        }) 
    }

    function handleChange(e) {
        const input_name = e.target.name
        const update = e.target.value
        if (input_name === "email_input") {
        setcred({...cred,mail:update})
        }
        else if (input_name === "password_input") {
            setcred({...cred,pass:update})
        }
        
    }

    return (
        <div className="padder flex_row">

            <form onSubmit={handlesubmit} className="form_box" action="/login" method="post">

                <div className="log_container flex_col">
                    <div className="email_box flex_row">
                        <label htmlFor="email_log">EMAIL</label>
                        <input className="input_box" onChange={handleChange} value={cred.mail} type="email" name="email_input" id="email_log" />
                    </div>

                    <div className="password_box flex_row">
                        <label htmlFor="password_input">PASSWORD</label>
                        <input className="input_box" onChange={handleChange} value={cred.pass} type="password" name="password_input" id="password_input" />
                    </div>

                    <div className="flex_row log_buttons">
                        <Link to="/signup">sign up</Link>
                        <button type="submit" name="LOGIN" className="login_button fancy_button">login</button> 
                    </div>

                    <div className="announce_box">
                    <p className="pass_error">
                        {pass_err_msg}
                    </p>
                    </div>
                    
                </div>

            </form>
            
        </div>
    )
}

export default  Login_page
