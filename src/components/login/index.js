import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputForm(props) {



  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', color: "secondary" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={props.onChange} label={props.label} variant="outlined" type={props.type}/>
    </Box>
  );
}