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
    <div id="BasicInfo__Screen">
      <Typography variant="h4" className="BasicInfo_Title">Basic Info</Typography>
      <TextField fullWidth variant='outlined' label='Full Name' required type="name" className='BasicInfo_TextField' />
      <TextField fullWidth variant='outlined' label='Email Address' required type='email' className='BasicInfo_TextField' />

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

      <FormControl id="BasicInfo_GenderForm" >
        <FormLabel id="BasicInfo_GenderForm"><Typography variant="h6">Gender</Typography></FormLabel>
        <RadioGroup
          row
          aria-labelledby="BasicInfo_GenderForm"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      
      <div id="BasicInfo__button">
        <Button variant='contained'  className="BasicInfo__Skipbutton" >Skip </Button>
        <Button variant='contained' className="BasicInfo__Continuebutton" >Continue </Button>
      </div>

    </div>
  )
}

export default BasicInfo;