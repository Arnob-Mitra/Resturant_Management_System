import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import './index.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ModalResturant() {
  const [open, setOpen] = React.useState(false);
  const [resturantName, setResturantName] = useState('');
  const [homeInfo, setHomeInfo] = useState('');
  const [street, setStreet] = useState('');
  const [administrative_locality3, setadministrative_locality3] = useState('');
  const [administrative_locality2, setadministrative_locality2] = useState('');
  const [administrative_locality1, setadministrative_locality1] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const modalResturant = async (event:any) => {
   event.preventDefault()
   
   fetch("http://127.0.0.1:8000/api/v1/restaurant", {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({ resturantName, homeInfo }),
  }).then((response) => {
      return response.json()
    })
    .then((data) => {
      localStorage.setItem('access', data.data.access);
      localStorage.setItem('refresh', data.data.refresh);
      navigate('/rmsTable')
    });
  }
   
  const resturantNameHandler = (event: any) => {
    setResturantName(event.target.value);
  }
  const homeInfoHandler = (event: any) => {
    setHomeInfo(event.target.value);
  }
  const streetHandler = (event: any) => {
    setStreet(event.target.value);
  }
  const administrative_locality3Handler = (event: any) => {
    setadministrative_locality3(event.target.value);
  }
  const administrative_locality2Handler = (event: any) => {
    setadministrative_locality2(event.target.value);
  } 
  const administrative_locality1Handler = (event: any) => {
    setadministrative_locality1(event.target.value);
  }
  const countryHandler = (event: any) => {
    setCountry(event.target.value);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <form onSubmit={modalResturant}>
      <div className='newAreabutton__color' onClick={handleClickOpen}>
        Add New Resturant
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="ModalResturant_Screen">
          {"Make your Resturant here:"}
        </DialogTitle>
        <TextField id="ModalResturant_textfield" value={resturantName} label="Resturant Name" required variant="outlined" onChange={resturantNameHandler}/>
        <TextField id="ModalResturant_textfield" value={homeInfo} label="HomeInfo" required variant="outlined" onChange={homeInfoHandler} />
        <TextField id="ModalResturant_textfield" value={street} label="Street" required variant="outlined" onChange={streetHandler}/>
        <TextField id="ModalResturant_textfield" value={administrative_locality3} label="administrative_locality3" required variant="outlined" onChange={administrative_locality3Handler}/>
        <TextField id="ModalResturant_textfield" value={administrative_locality2} label="administrative_locality2" required variant="outlined" onChange={administrative_locality2Handler}/>
        <TextField id="ModalResturant_textfield" value={administrative_locality1} label="Address" required variant="outlined" onChange={administrative_locality1Handler}/>
        <TextField id="ModalResturant_textfield" value={country} label="Country" required variant="outlined" onChange={countryHandler}/>    
       <FormControl id="BasicInfo_GenderForm">
          <FormLabel ><Typography variant="h6">Resturant Type:</Typography></FormLabel>
          <RadioGroup
            row={true}
            name="row-radio-buttons-group"
            aria-labelledby="demo-row-radio-buttons-group-label"
          >
            <FormControlLabel value="dine_in" control={<Radio/>} label="Dine In" />
            <FormControlLabel value="take_away" control={<Radio />} label="Take Away " />
            <FormControlLabel value="dine_in_and_take_away" control={<Radio/>} label="Dine In and Take Away" />
            <FormControlLabel value="dine_in_and_delivery" control={<Radio />} label="Dine In and Delivery" />
            <FormControlLabel value="Take_Away_and_Delivery" control={<Radio />} label="Take Away and Delivery" />
            <FormControlLabel value="all" control={<Radio/>} label="All" />
          </RadioGroup>
        </FormControl>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>

      </Dialog>
    </form>
  );
}

export default ModalResturant;

