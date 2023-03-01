import React from "react";
import './index.scss';
import { Button, TextField, Typography, } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const BasicInfo = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  return (
    <main id= "BasicInfo__wholeScreen">
    <div id="BasicInfo__Screen">
      <Typography variant="h4" className="BasicInfo_Title">Basic Info</Typography>
      <TextField fullWidth variant='outlined' label='Full Name'  className='BasicInfo_TextField' />
      <TextField fullWidth variant='outlined' label='Email Address' type='email' className='BasicInfo_TextField' />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className='BasicInfo_TextField'
          label="Date of Birth"
          openTo="day"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue: React.SetStateAction<dayjs.Dayjs | null>) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField fullWidth  {...params} />}
        />
      </LocalizationProvider>

      <FormControl id="BasicInfo_GenderForm">
        <FormLabel ><Typography variant="h6">Gender</Typography></FormLabel>
        <RadioGroup
          row={true}
          name="row-radio-buttons-group"
          aria-labelledby="demo-row-radio-buttons-group-label"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      
      <div id="BasicInfo__button">
        <Button variant='contained' className="BasicInfo__Skipbutton" >Skip </Button>
        <Button variant='contained' className="BasicInfo__Continuebutton" ><a href="/rmsTable">Continue</a> </Button>
      </div>
    </div>
       <div id="BasicInfo__Screen2">
       <div className="BasicInfoPage__Screen2Title">
       <Typography variant="h4" className="BasicInfo_TitleOfProduct">Title of the Product</Typography>
       <Typography variant="h5" className="BasicInfo_TitleOfProduct2">A Brief Discription</Typography>
       <img className="BasicInfo__Screen2Image" src="../../assets/resturant2.jpg" alt="" />
      </div>
     </div>
   </main>
  )
}

export default BasicInfo;