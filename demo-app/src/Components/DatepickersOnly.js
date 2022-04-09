import React, {useState, useEffect} from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';


export default function DatepickersOnly() {
    const [startDate, setStartDate] = useState(null);  
    const [endDate, setEndDate] = useState(null);
    
    const handleStartDate = (value) => {
      setStartDate(value)
      setEndDate(value)
    }
  
    const handleEndDate = (value) => {
      setEndDate(value)
    }

  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={12} align="center">
            <h2>MUI Date Pickers</h2>
        </Grid>
        <Grid item xs={4} align="left"></Grid>
        <Grid item xs={2} align="left">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                disablePast
                name="startDate"
                value={startDate}
                onChange={(newValue) => {
                handleStartDate(newValue);
                }}
                label="Start Date"
                inputFormat="MM/dd/yyyy"    
                
                renderInput={(params) => <TextField   
                size="small" {...params} sx={{ width: '100%' }}/>}
            />                    
            </LocalizationProvider>          
        </Grid>

        <Grid item xs={2} align="left">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="End Date"
                inputFormat="MM/dd/yyyy"
                value={endDate}
                fullWidth
                minDate={endDate}
                onChange={(newValue) => {
                    handleEndDate(newValue);
                }}
                renderInput={(params) => <TextField size="small" {...params} sx={{ width: '100%' }}/>}
                />                    
            </LocalizationProvider>    
            </Grid>
            <Grid item xs={4} align="left"></Grid>
            <Grid item xs={12} align="center">

            <Button variant="contained" color="primary" disabled={!startDate || !endDate}>Submit</Button>      
            </Grid>
        </Grid>
    </>
  )
}