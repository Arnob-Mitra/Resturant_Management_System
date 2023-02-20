import React from "react";
import './index.scss';
import { Button, TextField, Typography } from "@mui/material";



const SignIn = () => {
  return (
    <div id="SignUpPage__Screen">
      <Typography variant="h4" className="SignUpPage_Title">Create New Account</Typography>
      <TextField fullWidth variant='outlined' label='Phone Number' required type='number' className='SignUpPage_Textfield' />
      <TextField fullWidth variant='outlined' label='Password' required type='password' className='SignUpPage_Textfield' />
      <TextField fullWidth variant='outlined' label='Confirm Password' required type='password' className='SignUpPage_Textfield' />
      <Button variant='contained' id="SignUpPage__button" >Sign In</Button>
      <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img src="../../assets/googleIcon.png" alt="" />Sign Up with Google</Button>
      <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img src="../../assets/facebookIcon.png" alt="" />Sign Up with facebook</Button>
      <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img src="../../assets/instagramIcon.png" alt="" />Sign Up with Instagram</Button>
    </div>
  )
}

export default SignIn;