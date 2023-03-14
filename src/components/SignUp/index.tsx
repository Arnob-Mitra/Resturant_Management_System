import React, { useState } from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
//import RegExp from 'regexpp';


function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const navigate = useNavigate();

  const signin = async (event: any) => {
    event.preventDefault()

    fetch("http://127.0.0.1:8000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },

      body: JSON.stringify({ email, password, 'user_type': 'restaurant' }),
    })
      .then((response) => {
        return response.json()
      })

      .then((data) => {
        localStorage.setItem('access', data.data.access);
        localStorage.setItem('refresh', data.data.refresh);
        navigate('/b')
      });
  }

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  }

  const [cpwd, setCpwd] = useState('');

  const [pwdError, setPwdError] = useState(false);
  const [cPwdError, setCPwdError] = useState(false);

  //const [loading, setLoading] = useState(false);

  // const pwdHelperText = 'Should be at least 8 characters long having at least one uppercase letter, one lowercase letter, one number and one special character';
  const cPwdHelperText = 'Passwords doesn\'t match';

  const pwdRegex = RegExp('^((?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,})$')
  const login = async (event: any) => {
    event.preventDefault();
  }

  const pwdHandler = (event: any) => {
    setPwd(event.target.value)
  }

  const pwdBlurHandler = (e: any) => {
    if (!pwdRegex.test(e.target.value) && e.target.value !== '') {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
  }

  const cPwdHandler = (event: any) => {
    setCpwd(event.target.value)
  }

  const cPwdBlurHandler = (e: any) => {
    if (password === e.target.value) {
      setCPwdError(false);
    } else {
      setCPwdError(true);
    }
  }

  async function postData(url = "", data = {}) {
  }

  return (
    <main id="SignupPage__wholeScreen">
      <form id="SignUpPage__Screen" onSubmit={signin}>
        <Typography variant="h4" className="SignUpPage_Title">Create New Account</Typography>
        <TextField fullWidth variant='outlined' label='Email Address' required type='email'
          className='SignUpPage_Textfield' value={email} onChange={emailHandler} />
        <TextField fullWidth variant='outlined' label='Password' required type='password'
          className='SignUpPage_Textfield' value={password} onChange={pwdHandler} error={pwdError} />
        <TextField fullWidth variant='outlined' label='Confirm Password' required type='password'
          className='SignUpPage_Textfield' value={cpwd} onChange={cPwdHandler} error={cPwdError} helperText={cPwdError ? cPwdHelperText : ''} onBlur={cPwdBlurHandler} />
        <Button variant='contained' id="SignUpPage__button" type="submit" >Sign In</Button>
        <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img className="socialImage" src="../../assets/googleIcon.png" alt="" />Sign Up with Google</Button>
        <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img className="socialImage" src="../../assets/facebookIcon.png" alt="" />Sign Up with facebook</Button>
        <Button variant='outlined' className="SignupPage_socialmediaIcon"> <img className="socialImage" src="../../assets/instagramIcon.png" alt="" />Sign Up with Instagram</Button>
      </form>

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



  

