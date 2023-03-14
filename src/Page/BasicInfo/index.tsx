import React, {useState} from "react";
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
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function BasicInfo () {
   const { userId } = useParams();
   console.log(userId);
  const [name, setName] = useState('');
  const nameHandler = (event: any) => {
		setName(event.target.value);
  }
  const navigate = useNavigate();
  const basicInfo = async (event: any) => {
    event.preventDefault()

    fetch("http://127.0.0.1:8000/api/v1", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : `Bearer ${localStorage.getItem('access')}`
      },

      body: JSON.stringify({ name, value }),
    })
      .then((response) => {
        return response.json()
      })

      .then((data) => {
        localStorage.setItem('access', data.data.access);
        localStorage.setItem('refresh', data.data.refresh);
        console.log(data);
        navigate('/f')
      });
  }

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2001-04-07'));
  return (
    <main id= "BasicInfo__wholeScreen">
    <form id="BasicInfo__Screen" onSubmit={basicInfo}>
      <Typography variant="h4" className="BasicInfo_Title">Basic Info</Typography>
      <TextField fullWidth variant='outlined' label='Full Name'  
      className='BasicInfo_TextField' value={name} onChange={nameHandler}  />
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
        <Button variant='contained' className="BasicInfo__Continuebutton" ><a className="ButtonSingUptoBasicInfo" href="/f"> Continue</a> </Button>
      </div>
    </form>
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