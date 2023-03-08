import React from 'react'
import './index.scss';
import { Button, Typography, Card, TextField } from "@mui/material";

const RMSTable = () => {
  return (
    <div id='RMSTable__WholeScreen'>
      <div className="RMSTable__topnav">
        <Typography variant='h6' className="RMSTable__Logo">Home</Typography>
        <input className='RMSTable__searchbox' type="text" placeholder="Search.." />
        <div className="dropdown">
          <button className="dropbtn"></button>
          <div className="dropdown-content">
            <a href="#">Settings</a>
            <a href="#">LogOut</a>
          </div>
        </div>
      </div>

      <div id="RMSTable__Screen">
        <div className='RMSTabele__Sidemenu'>
          <Card><button><Typography className='RMSTable__Sidemenu_buttons'>TakeAway</Typography></button></Card>
          <Card><button><Typography className='RMSTable__Sidemenu_buttons'>Customer Search</Typography></button></Card>
          <Card><button><Typography className='RMSTable__Sidemenu_buttons'>Waiter</Typography></button></Card>
        </div>

        <div className="RMSTable_MainButton">
          <button> <Typography className="RMSTable_Buttons">T.01</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.02</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.03</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.05</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.06</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.07</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.09</Typography></button>
          <button> <Typography className="RMSTable_Buttons">T.10</Typography></button>
        </div>
      </div>
    </div>
  )
}

export default RMSTable
