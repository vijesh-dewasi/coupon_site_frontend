import "./login.css"
import React, {useEffect,useState } from "react"


function Login_page() {

           const [pass_err_msg,set_pass_msg]=useState("");

    const [cred, setcred] = useState({ mail: "", pass: "",repass:""})

    function handlesubmit(e) {
        e.preventDefault();
        if(cred.pass===cred.repass){
            //some logic to post request to add a new user to db
            console.log(cred)
        }
        else{
            console.log("the password re-entered wont match to the first one");
            set_pass_msg("the password re-entered wont match to the first one")            
        }
        
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
        else if (input_name === "re-password_input") {
            setcred({...cred,repass:update})
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

                    <div className="password_box flex_row">
                        <label htmlFor="password_input">RE-Enter PASSWORD</label>
                        <input className="input_box" onChange={handleChange} value={cred.repass} type="password" name="re-password_input" />
                    </div>

                    <div className="flex_row log_buttons">
                        <button type="submit" name="SIGNUP" className="login_button fancy_button">sign up</button>
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