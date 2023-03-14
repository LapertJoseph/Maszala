import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function BasicButtons(props) {
  return (
    <Stack spacing={props.spacing} direction={props.direction}>
      <Button
        variant="contained"
        onClick={props.onClick}
        disabled={props.disabled}
        color={props.color}
        sx={props.sx}
        type={props.type}
      >
        {props.label}
      </Button>
    </Stack>
  );
}

BasicButtons.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  spacing: PropTypes.number,
  sx: PropTypes.object,
  type: PropTypes.oneOf(["button", "submit", "reset", undefined]),
  variant: PropTypes.string,
};

BasicButtons.defaultProps = {
  color: "success",
  disabled: false,
  direction: "row",
  label: "",
  spacing: 2,
  sx: {},
  variant: "contained",
};
