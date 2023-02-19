import React from "react";
import './index.scss';
import {TextField} from "@mui/material";


const BasicInfo = () => {
  return (
    <div className="BasicInfo__Screen">
      <h1 className="BasicInfo_Title">Basic Info</h1>
      <TextField variant='outlined' label='Full Name' className='BasicInfo_FullName' />
      <TextField variant='outlined' label='Email Address' required type='email' className='BasicInfo_Email' />
      <div className="BasicInfo__DateofBirth"><h4>Date of Birth:</h4>
        <input className="BasicInfo__DateofBirthBox" type="date" id="start" name="trip-start"
         value="2018-07-22" min="1901-01-01" max="2023-12-31"></input>
      </div>

      <div className="BasicInfo__Gender">
      </div>
      
    <div className="BasicInfo_Button">
      <button className="BasicInfo__skipbutton" >Skip</button>
      <button className="BasicInfo__continuebutton" >Continue</button>
    </div>
      
    </div>
  )
}

export default BasicInfo;