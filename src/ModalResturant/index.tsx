import * as React from 'react';
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

export default function ModalResturant() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <Button className='newAreabutton__color' variant="outlined" onClick={handleClickOpen}>
       Add New Resturant
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id = "ModalResturant_Screen">
          {"Make your Resturant here:"}
        </DialogTitle>
        <TextField id="ModalResturant_textfield" label="Resturant Name" required variant="outlined" />
        <TextField id="ModalResturant_textfield" label="Address" required variant="outlined" />
        <FormControl id="BasicInfo_GenderForm">
        <FormLabel ><Typography variant="h6">Resturant Type:</Typography></FormLabel>
        <RadioGroup
          row={true}
          name="row-radio-buttons-group"
          aria-labelledby="demo-row-radio-buttons-group-label"
        >
          <FormControlLabel value="dine_in" control={<Radio />} label="Dine In" />
          <FormControlLabel value="take_away" control={<Radio />} label="Take Away " />
          <FormControlLabel value="dine_in_and_take_away" control={<Radio />} label="Dine In and Take Away" />
          <FormControlLabel value="dine_in_and_delivery" control={<Radio />} label="Dine In and Delivery" />
          <FormControlLabel value="Take_Away_and_Delivery" control={<Radio />} label="Take Away and Delivery" />
          <FormControlLabel value="all" control={<Radio />} label="All" />

        </RadioGroup>
      </FormControl>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}