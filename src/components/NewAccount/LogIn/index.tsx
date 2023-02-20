import React from "react";
import './index.scss';
import { Button, TextField, Typography } from "@mui/material";



const LogIn = () => {
  return (
    <div id="LogInPage__Screen">
      <Typography variant="h4" className="LogInPage_Title">Log In To Your Account</Typography>
      <TextField variant='outlined' label='Phone Number' required type='number' className='LogInPage_Textfield' />
      <TextField variant='outlined' label='Password' required type='password' className='LogInPage_Textfield' />
      <Button variant='contained' id="LogInPage__button" >Log In</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img src="../../assets/googleIcon.png" alt="" />Sign In with Google</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img src="../../assets/facebookIcon.png" alt="" />Sign In with facebook</Button>
      <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img src="../../assets/instagramIcon.png" alt="" />Sign In with Instagram</Button>
    </div>
  )
}

export default LogIn;