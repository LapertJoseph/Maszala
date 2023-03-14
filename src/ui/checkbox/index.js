import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Checkboxes(props) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox/>}
        label={props.label}
        checked={props.checked}
        onChange={props.onChange}
      />
    </FormGroup>
  );
}

Checkboxes.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};
