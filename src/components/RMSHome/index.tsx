import React from 'react'
import './index.scss';
import { Button, Typography, Card, TextField,Table,TableRow,TableCell } from "@mui/material";

const RMSHome = () => {
  return (
    <main id='RMSHome__screen'>
      <div className='RMSHome__sidemenu'>
        <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Order History</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Change Manager</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Ticket Note</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Print All</Typography></button></Card>
      </div>
      <div id='RMSHome__centerbox'>
        <div className='RMSHome__centerbox_top'>
          <Typography className='RMSHome__centerbox_topbox'>Customer:  <input type="text" id="fname" name="fname"></input></Typography>
          <Typography className='RMSHome__centerbox_topbox'>Status: New </Typography>
          <Typography className='RMSHome__centerbox_topbox'>Select Table :
            <select name="plan" id="plan">
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="04">05</option>
              <option value="04">06</option>
            </select>
          </Typography>
          <Typography className='RMSHome__centerbox_topbox'>Select Waiter :
            <select name="plan" id="plan">
              <option value="01">Waiter.01</option>
              <option value="02">Waiter.02</option>
              <option value="03">Waiter.03</option>
              <option value="04">Waiter.04</option>
              <option value="04">Waiter.05</option>
              <option value="04">Waiter.06</option>
            </select>
          </Typography>
          <Typography className='RMSHome__centerbox_topbox'>Guests:  <input  type="number" id="fname" name="fname" ></input></Typography>
        </div>
        <div className='RMSHome__centerbox_receipt'>
          <Table>
            <TableRow>
            <TableCell align="left">Item Name</TableCell>
            <TableCell align="center">Qantity</TableCell>
            <TableCell align="right">Price</TableCell>
            </TableRow>
          </Table>
        </div>
        <div id="RMSHome_center__button">
          <Button variant='contained' className="RMSHome__CancelButton" >Cancel </Button>
          <Button variant='contained' className="RMSHome__SubmitButton" >Submit </Button>
        </div>
      </div>

      <div id='RMSHome__Screen2'>
        <div id='RMSHome__leftslide'>
          <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
          <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
          <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
          <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
          <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
        </div>
        
        <div className='RMSHome__Screen2_FoodItemArea'>
        <TextField size='small' className='RMSHome__Screen2_searchbox'></TextField>
          <div className='RMSHome__Screen2_FoodItem_list'>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
          </div>  
          <div id='RMSHome__KeyBoard'>
          <button className='keyboardNumber'>1</button>
          <button  className='keyboardNumber'>2</button>
          <button  className='keyboardNumber' >3</button>
          <button  className='keyboardNumber' >4</button>
          <button  className='keyboardNumber' >5</button>
          <button  className='keyboardNumber' >6</button><br/>
          <button  className='keyboardNumber' >7</button>
          <button  className='keyboardNumber' >8</button>
          <button  className='keyboardNumber' >9</button>
          <button  className='keyboardNumber' >0</button>
          <button  className='keyboardNumber' >,</button>
          <button  className='keyboardNumber' >X</button>
        </div>

        </div>      
      </div>


    </main>
  )
}

export default RMSHome;

