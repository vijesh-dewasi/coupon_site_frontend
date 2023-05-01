import "./login.css"
import React, { useEffect } from "react"
import { useState } from "react"
import {
    Link,
    useParam
  } from 'react-router-dom'

function Login_page() {

    const [cred, setcred] = useState({ mail: "", pass: "" })
    const [pass_err_msg,set_pass_msg]=useState("");
    
    // useEffect(()=>{
    // return (()=>{
    //     setcred({mail:"",pass:""})
    // })  
    // },[])

    function handlesubmit(e) {
        e.preventDefault();

        //first send the received credentials to the server then we need to authenticate and allow the coupon code usage 

        cred.mail="";
        cred.pass="";
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
        console.log(cred);
    }

    return (
        <div className="padder flex_row">

            <form onSubmit={handlesubmit} className="form_box" action="/login" method="post">

                <div className="log_container flex_col">
                    <div className="email_box flex_row">
                        <label htmlFor="">EMAIL</label>
                        <input className="input_box" onChange={handleChange} value={cred.mail} type="email" name="email_input" />
                    </div>

                    <div className="password_box flex_row">
                        <label htmlFor="password_input">PASSWORD</label>
                        <input className="input_box" onChange={handleChange} value={cred.pass} type="password" name="password_input" />
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
