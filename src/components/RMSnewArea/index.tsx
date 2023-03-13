import React from 'react'
import './index.scss';
import {Typography, TextField, Button} from '@mui/material'


const RMSnewArea = () => {
  return (
    <main id = "RMSnewArea__WholeScreen">
      <Button variant='contained' id="RMSnewarea__button" ><a className='newAreabutton__color' href='/rmsTable'>Add New Resturantnt</a></Button>
      
      
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


