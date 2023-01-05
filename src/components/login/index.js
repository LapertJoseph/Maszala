import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputForm(props) {



  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth={props.fullWidth} onChange={props.onChange} label={props.label} variant="outlined" type={props.type} color={props.color}/>
    </Box>
  );
}