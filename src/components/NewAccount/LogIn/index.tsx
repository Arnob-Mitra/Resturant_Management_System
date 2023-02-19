import React from "react";
import './index.scss';
import { Button, TextField } from "@mui/material";



const LogIn = () => {
  return (
    <div className="LogInPage__Screen">
      <h1 className="LogInPage_Title">Log In To Your Account</h1>
      <TextField variant='outlined' label='Phone Number' required type='number' className='LogInPage_Phonenumber' />
      <TextField variant='outlined' label='Password' required type='password' className='LogInPage_password' />
      <TextField variant='outlined' label='Confirm Password' required type='password' className='LogInPage_ConfirmPassword' />


      <button className="LogInPage__button" >Sign In</button>
      <div className="SignUp_signButton">
        <button className="LogInPage_GoogleIcon"> <img src="../../assets/googleIcon.png" />Sign In with Google</button>
        <button className="LogInPage_facebookIcon"> <img src="../../assets/facebookIcon.png" />Sign In with facebook</button>
        <button className="LogInPage_instagramIcon"> <img src="../../assets/instagramIcon.png" />Sign In with Instagram</button>
      </div>
    </div>
  )
}

export default LogIn;