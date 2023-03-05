import React from 'react'
import { Typography,TextField,Button } from '@mui/material';
import './index.scss';

const ForgetPassword = () => {
  return (
    <main id= "ForgetPass__Screen">
       <Typography variant="h4" className="ForgetPass_Title">Recover your Password</Typography>
       <TextField fullWidth variant='outlined' label='New Password' required type='password' className='ForgetPass_Textfield' />
       <TextField fullWidth variant='outlined' label='Confirm Password' required type='password' className='ForgetPass_Textfield' />
       <Button variant='contained' id="LogInPage__button" ><a className='forgpassToLogIn' href='/l'>Continue</a></Button>
    </main>
  )
}

export default ForgetPassword;
