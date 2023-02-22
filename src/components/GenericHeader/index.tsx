import React from 'react'
import {Typography, TextField} from '@mui/material';
import './index.scss';
import { type } from 'os';
import{useState} from 'react'


const GenericHeader = () => {
  return (
     <div id='GenericHeader__navbar'>
       <Typography className='GenericHeader__Logo'>Logo
         <li><a className='Genericcard__MenuItem' href='/s'>Sign Up</a></li>
         <li><a className='GenericCard__MenuItem' href='/l'>Log In</a></li>

       
       </Typography>
       <TextField className='GenericHeader__searchbox' id='search-bar' >
         <input type="Search" id="mySearch"name="q" placeholder="Search your food…" />
         <button>Search</button>
       </TextField>
       <Typography className='GenericHeader__icon'>Pic</Typography>
     </div>
  )
}

export default GenericHeader;
