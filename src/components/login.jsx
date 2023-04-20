import "./login.css"
import React, { useEffect } from "react"
import { useState } from "react"


function Login_page() {

    const [cred, setcred] = useState({ mail: "", pass: "" })

    // useEffect(()=>{
    // return (()=>{
    //     setcred({mail:"",pass:""})
    // })  
    // },[])

    function handlesubmit(e) {
        e.preventDefault();
        console.log(cred)

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
                        <label htmlFor="">EMAIL</label>
                        <input className="input_box" onChange={handleChange} value={cred.mail} type="email" name="email_input" />
                    </div>

                    <div className="password_box flex_row">
                        <label htmlFor="password_input">PASSWORD</label>
                        <input className="input_box" onChange={handleChange} value={cred.pass} type="password" name="password_input" />
                    </div>

                    <div className="flex_row log_buttons">
                        <button type="submit" name="LOGIN" className="login_button fancy_button">login</button>
                        <button type="submit" name="SIGNUP" className="login_button fancy_button">sign up</button>
                    </div>

                </div>

            </form>

        </div>
    )
}

export default  Login_page
