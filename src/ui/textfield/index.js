import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function FieldText(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        label={props.label}
        variant="outlined"
        onChange={props.onChange}
        type={props.type}
        error={props.error}
      />
    </Box>
  );
}

FieldText.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.bool
};
