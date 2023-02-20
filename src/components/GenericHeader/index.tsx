import React from 'react'
import {AppBar, TextField, Typography} from '@mui/material';

const GenericHeader = () => {
  return (

    <header id='GenericHeader__Head'>
      <Typography className='GenericHeader__icon'>
        Icon
      </Typography>
      <div className='GenericHeader__SearchBox'>
      <TextField variant='outlined' label='Search your food' className='LogInPage_Textfield' />
      </div> 
    </header>
  )
}

export default GenericHeader;
