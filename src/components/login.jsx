import "./login.css"
import React from "react"
import { useState } from "react"

function login_page(){
    return(
<div className="padder flex_row">

<form className="form_box" action="/login" method="post">
<div className="log_container flex_col">
<div className="email_box flex_row">
<label htmlFor="">EMAIL</label>
<input type="email" name="email_input" />
</div>
<div className="password_box flex_row">
<label htmlFor="password_input">PASSWORD</label>
<input type="password" name="password_input"/>
</div>
<div className="flex_row log_buttons">
<button type="submit" id="LOGIN" className="login_button fancy_button">login</button>
<button type="submit" id="SIGNUP" className="login_button fancy_button">sign up</button>
</div>

</div>

</form>

</div>
    )
}

export default login_page
