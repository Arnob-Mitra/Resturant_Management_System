import React from "react";
import './index.scss';
import { Button, TextField, Typography } from "@mui/material";



const LogIn = () => {
  return (
    <main id="SignupPage__wholeScreen">
    <div id="LogInPage__Screen">
      <Typography variant="h5" className="LogInPage_Title">Log In To Your Account</Typography>
      <TextField fullWidth variant='outlined' label='Phone Number' required type='number' className='LogInPage_Textfield' />
      <TextField fullWidth variant='outlined' label='Password' required type='password' className='LogInPage_Textfield' />
      <a href="/"><Typography className="LogInPage_ForgotPassword">Forgot Password?</Typography></a> 
      <Button variant='contained' id="LogInPage__button" >Log In</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/googleIcon.png" alt="" />Log In with Google</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/facebookIcon.png" alt="" />Log In with facebook</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/instagramIcon.png" alt="" />Log In with Instagram</Button>
      <Typography className="LogInPage_BackToSignUp">Don't have an account?   <a href="/s"> Sign In</a></Typography>
    </div>
     <div id="LogInPage__Screen2">
     <Typography variant="h6" className="LogInPage_TitleOfProduct">Title of the Product</Typography>
     <Typography variant="subtitle1" className="LogInPage_TitleOfProduct">A Brief Discription</Typography>
     <img className="LogInPage__Screen2Image" src="../../assets/resturant2.jpg" alt="" />
   </div>
 </main>

  )
}

export default LogIn;