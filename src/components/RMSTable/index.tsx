import React from 'react'
import './index.scss';
import { Button, Typography, Card, TextField } from "@mui/material";

const RMSTable = () => {
  return (
    <main id="RMSTable__Screen">
      <header id='RMSTabele__Header'>
        <button> <Typography className="RMSTable_HeaderButtons">TakeAway</Typography></button>
        <button> <Typography className="RMSTable_HeaderButtons">Customer Search</Typography></button>
        <button> <Typography className="RMSTable_HeaderButtons">Waiter</Typography></button>
      </header>

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
      

    </main>
  )
}

export default RMSTable
