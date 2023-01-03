import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonSubmit = (props) => {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={props.onClick} variant="contained">{props.value}</Button>
    </Stack>
  );
}
export default ButtonSubmit;