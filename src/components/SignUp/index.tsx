import React from "react";
import './index.scss';
import { Button, TextField, Typography } from "@mui/material";



const SignIn = () => {
  return (
    <main id="SignupPage__wholeScreen">
      <div id="SignUpPage__Screen">
        <Typography variant="h5" className="SignUpPage_Title">Create New Account</Typography>
        <TextField fullWidth variant='outlined' label='Phone Number' required type='number' className='SignUpPage_Textfield' />
        <TextField fullWidth variant='outlined' label='Password' required type='password' className='SignUpPage_Textfield' />
        <TextField fullWidth variant='outlined' label='Confirm Password' required type='password' className='SignUpPage_Textfield' />
        <Button variant='contained' id="SignUpPage__button" >Sign In</Button>
        <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img className="socialImage" src="../../assets/googleIcon.png" alt="" />Sign Up with Google</Button>
        <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img className="socialImage" src="../../assets/facebookIcon.png" alt="" />Sign Up with facebook</Button>
        <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img className="socialImage" src="../../assets/instagramIcon.png" alt="" />Sign Up with Instagram</Button>
      </div>

      <div id="SignUpPage__Screen2">
        <div className="SignUpPage__Screen2Title">
        <Typography variant="h4" className="SignUpPage_TitleOfProduct">Title of the Product</Typography>
        <Typography variant="h5" className="SignUpPage_TitleOfProduct2">A Brief Discription</Typography>
        <img className="SignUpPage__Screen2Image" src="../../assets/resturant2.jpg" alt="" />
      </div>
      </div>
    </main>


  )
}

export default SignIn;