import React from 'react'
import { Fragment, useEffect } from 'react';
import './index.scss';
import ModalResturant from '../ModalResturant';
import {Typography, TextField, Button} from '@mui/material'


function RMSnewArea () {
  
  return (
    <main id = "RMSnewArea__WholeScreen">
            <Button variant='contained' id="RMSnewarea__button" ><div className='newAreabutton__color'><ModalResturant/></div></Button>     
     
      <div className="RMSnewArea_MainButton">
          <button> <Typography className="RMSnew_Buttons">Resturant Name</Typography></button>
          <button> <Typography className="RMSnew_Buttons">Resturant Name</Typography></button>
          <button> <Typography className="RMSnew_Buttons">Resturant Name</Typography></button>
          <button> <Typography className="RMSnew_Buttons">Resturant Name</Typography></button>
          <button> <Typography className="RMSnew_Buttons">Resturant Name</Typography></button>
          <button> <Typography className="RMSnew_Buttons">Resturant Name</Typography></button>   
        </div>
    </main>
  )
}

export default RMSnewArea;


