import React from "react";
import './index.scss';
import {Button, TextField, Typography,} from "@mui/material";
import {DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const BasicInfo = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  return (
    <div id="BasicInfo__Screen">
      <Typography variant="h4" className="BasicInfo_Title">Basic Info</Typography>
      <TextField variant='outlined' label='Full Name' required type="name" className='BasicInfo_TextField' />
      <TextField variant='outlined' label='Email Address' required type='email' className='BasicInfo_TextField' />
      
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
          renderInput={(params) => <TextField   {...params} />}
        />
           </LocalizationProvider>
      <div className="BasicInfo__Gender">
      </div>
      <div id="BasicInfo__button">
        <Button variant='contained' className="BasicInfo__Skipbutton" >Skip </Button>
        <Button variant='contained' className="BasicInfo__Continuebutton" >Continue </Button>
      </div>

    </div>
  )
}

export default BasicInfo;