import React from 'react'
import './index.scss';
import { Button,  Typography,Card , TextField} from "@mui/material";

const RMSHome = () => {
  return (
    <main id='RMSHome__screen'>
        <div className='RMSHome__sidemenu'>
          <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Order History</Typography></button></Card>
          {/* <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Select Table</Typography></button></Card> */}
          {/* <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Select Waiter</Typography></button></Card>       */}
          <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Change Manager</Typography></button></Card>          
          <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Ticket Note</Typography></button></Card>          
          {/* <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Cancell All</Typography></button></Card>           */}
          <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Number of Guests</Typography></button></Card>          
          {/* <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Add Ticket</Typography></button></Card>   */}
          <Card><button><Typography className='RMSHome__Sidemenu_menulist'>Print All</Typography></button></Card>                     
        </div>
        <div id='RMSHome__centerbox'>
          <Card className='RMSHome__centerbox_top'>
          <TextField fullWidth variant='outlined' label='Ticket Customer' type='name' className='RMSHome__centerbox_topbox' />
          <TextField fullWidth variant='outlined' label='Status' type='' className='RMSHome__centerbox_topbox' />
          <TextField fullWidth variant='outlined' label='Select Table' className='RMSHome__centerbox_topbox' />
          <TextField fullWidth variant='outlined' label='Select Waiter' className='RMSHome__centerbox_topbox' />
          </Card>
        <div className='RMSHome__centerbox_receipt'>
        <Typography className='RMSHome__centerbox_receipt_newOrder' variant='subtitle1'> New Order:</Typography>
        </div>  
        <div id="RMSHome_center__button">
        <Button variant='contained'  className="RMSHome__CancelButton" >Cancel </Button>
        <Button variant='contained' className="RMSHome__SubmitButton" >Submit </Button>
      </div>
        </div>
        <div id='RMSHome__leftslide'>
        <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
        <Card><button><Typography className='RMSHome__Leftmenu_menulist'>Food1</Typography></button></Card>
        </div>
      
    </main>
  )
}

export default RMSHome;

