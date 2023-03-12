import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button sx={{width: 223}} variant="contained" onClick={props.onClick}>
        {props.label}
      </Button>
    </Stack>
  );
}

BasicButtons.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
