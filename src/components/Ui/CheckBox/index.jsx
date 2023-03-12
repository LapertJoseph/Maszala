import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Checkboxes(props) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={props.label}
      />
    </FormGroup>
  );
}

Checkboxes.propTypes = {
  label: PropTypes.string,
};
