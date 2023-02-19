import React from "react";
import './index.scss';
import { Button, TextField } from "@mui/material";



const SignIn = () => {
  return (
    <div className="SignUpPage__Screen">
      <h1 className="SignUpPage_Title">Create New Account</h1>
      <TextField variant='outlined' label='Phone Number' required type='number' className='SignUpPage_Phonenumber' />
      <TextField variant='outlined' label='Password' required type='password' className='SignUpPage_password' />
      <TextField variant='outlined' label='Confirm Password' required type='password' className='SignUpPage_ConfirmPassword' />


      <button className="SignUpPage__button" >Sign In</button>
      <div className="SignUp_signButton">
        <button className="SignupPage_GoogleIcon"> <img src="../../assets/googleIcon.png" />Sign In with Google</button>
        <button className="SignupPage_facebookIcon"> <img src="../../assets/facebookIcon.png" />Sign In with facebook</button>
        <button className="SignupPage_instagramIcon"> <img src="../../assets/instagramIcon.png" />Sign In with Instagram</button>
      </div>
    </div>
  )
}

export default SignIn;