import React from "react";
import './index.scss';
import { Button, TextField, Typography } from "@mui/material";



const LogIn = () => {
  return (
    <main id="LogInPage__wholeScreen">
    <div id="LogInPage__Screen">
      <Typography variant="h4" className="LogInPage_Title">Log In To Your Account</Typography>
      <TextField fullWidth variant='outlined' label='Email Address' required type='email' className='LogInPage_Textfield' />
      <TextField fullWidth variant='outlined' label='Password' required type='password' className='LogInPage_Textfield' />
      <a href="/"><Typography className="LogInPage_ForgotPassword"><a className="LogInToForgetPassButton" href="/forgetpass">Forgot Password?</a></Typography></a> 
      <Button variant='contained' id="LogInPage__button" >Log In</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/googleIcon.png" alt="" />Log In with Google</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/facebookIcon.png" alt="" />Log In with facebook</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/instagramIcon.png" alt="" />Log In with Instagram</Button>
      <Typography className="LogInPage_BackToSignUp">Don't have an account?   <a className="LogInToSigninButton" href="/s"> Sign In</a></Typography>
    </div>
     <div id="LogInPage__Screen2">
     <div className="LogInPage__Screen2Title">
     <Typography variant="h4" className="LogInPage_TitleOfProduct">Title of the Product</Typography>
     <Typography variant="h5" className="LogInPage_TitleOfProduct">A Brief Discription</Typography>
     <img className="LogInPage__Screen2Image" src="../../assets/resturant2.jpg" alt="" />
    </div>
   </div>
 </main>

  )
}

export default LogIn;