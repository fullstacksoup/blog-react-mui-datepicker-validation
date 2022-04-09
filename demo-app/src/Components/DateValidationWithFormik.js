import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker } from 'formik-mui-lab';
import Button from '@mui/material/Button';
import { Container, Box, Paper, Grid, TextField } from '@mui/material';


const DisplayingErrorMessagesSchema =  yup.object().shape({
  startDate: yup
    .date().nullable()
    .typeError('Start date is required')
    .required('Start Date is required'),

  endDate: yup
    .date().nullable()
    .when("startDate",
    (startDate, yup) => startDate && yup.min(startDate, "End date cannot be before start time"))
    .required('End Date is required')            
    .typeError('Enter a value End date')   
});


export default function DateValidationWithFormik() {
  return (
   <>
     

     <LocalizationProvider dateAdapter={AdapterDateFns}>
     <Formik
       initialValues={{
         startDate: '',
         endDate: '',
       }}
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);

      }}
     >
       {({ errors, touched, values }) => (
         <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} align="center">
                <h1>Formik Validate Date Pickers</h1>
            </Grid>
            <Grid item xs={3} align="left"></Grid>
            <Grid item xs={3} align="right">
              <Field 
                  component={DesktopDatePicker}
                  disablePast
                  views={['year', 'month', 'day']}
                  name="startDate"
                  label="Start Date"              />
            </Grid>
            <Grid item xs={3} align="left">
              <Field              
                  component={DesktopDatePicker}
                  name="endDate"
                  label="End Date"
                  views={['year', 'month', 'day']}

                />
              </Grid>
              <Grid item xs={3} align="left"></Grid>
              <Grid item xs={12} align="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
         </Form>
       )}
     </Formik>
     </LocalizationProvider>
   </>

  )  
}