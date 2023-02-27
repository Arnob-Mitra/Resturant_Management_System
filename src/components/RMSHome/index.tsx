import React from 'react'
import './index.scss';
import { Button, Typography, Card, TextField } from "@mui/material";

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
          <Typography className='RMSHome__centerbox_topbox'>Number of guests:  <input type="number" id="fname" name="fname"></input></Typography>
        </div>
        <div className='RMSHome__centerbox_receipt'>
          <table>
            <tr className='RMSHome__centerbox_receiptTitle'>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Chocolate Icecream</td>
              
              <td>200</td>
            </tr>
          </table>



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

          <div className='RMSHome__Screen2_FoodItem_list'>
            <TextField size='small' className='RMSHome__Screen2_searchbox'></TextField>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
            <button><Typography className='RMSHome__Screen2_FoodItem'>Food1</Typography></button>
          </div>
          <div id='RMSHome__KeyBoard'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button><br />
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>

          </div>

        </div>
      </div>


    </main>
  )
}

export default RMSHome;

