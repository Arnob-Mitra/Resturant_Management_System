import React from "react";
import './index.scss';
import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from 'react';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');

  const login = async (event: any) => {
    event.preventDefault()

    fetch("http://127.0.0.1:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({email,password}),
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      localStorage.setItem('access', data.data.access);
      localStorage.setItem('refresh', data.data.refresh);
      console.log(data);
    });
  }


  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  }
  const pwdHandler = (event: any) => {
    setPwd(event.target.value);
  }

 

  return (
    <main id="LogInPage__wholeScreen">
      <form id="LogInPage__Screen" onSubmit={login}>
        <Typography variant="h4" className="LogInPage_Title">Log In To Your Account</Typography>
        <TextField fullWidth variant='outlined' label='Email Address' required type='email' className='LogInPage_Textfield'
          value={email} onChange={emailHandler} />
        <TextField fullWidth variant='outlined' label='Password' required type='password' className='LogInPage_Textfield'
          value={password} onChange={pwdHandler} />

        <a href="/"><Typography className="LogInPage_ForgotPassword"><a className="LogInToForgetPassButton" href="/forgetpass">Forgot Password?</a></Typography></a>
        <Button variant='contained' id="LogInPage__button" >Log In</Button>
        <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/googleIcon.png" alt="" />Log In with Google</Button>
        <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/facebookIcon.png" alt="" />Log In with facebook</Button>
        <Button variant='outlined' className="LogInPage_socialmediaIcon"> <img className="socialImage" src="../../assets/instagramIcon.png" alt="" />Log In with Instagram</Button>
        <Typography className="LogInPage_BackToSignUp">Don't have an account?   <a className="LogInToSigninButton" href="/s"> Sign In</a></Typography>
      </form>
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
