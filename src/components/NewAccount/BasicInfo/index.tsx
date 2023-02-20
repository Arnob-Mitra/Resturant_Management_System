import React from "react";
import './index.scss';
import {Button, TextField, Typography,} from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';

const BasicInfo = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  return (
    <div id="BasicInfo__Screen">
      <Typography variant="h4" className="BasicInfo_Title">Basic Info</Typography>
      <TextField variant='outlined' label='Full Name' required type="name" className='BasicInfo_TextField' />
      <TextField variant='outlined' label='Email Address' required type='email' className='BasicInfo_TextField' />
      

      <div className="BasicInfo__Gender">
      </div>

      <Button variant='contained' id="BasicInfo__button" >Skip</Button>
      <Button variant='contained' id="SignUpPage__button" >Continue</Button>


    </div>
  )
}

export default BasicInfo;