import React from "react";
import { TextField } from "@material-ui/core";

const defaultConfig = {
  //   autoComplete: "",
  //   autoFocus: false,
  //   classes: null,
  color: "primary",
  //   defaultValue: "",
  //   disabled: false,
  //   error: false,
  //   FormHelperTextProps: null,
  //   fullWidth: false,
  //   helperText: null,
  id: "field",
  //   InputLabelProps: null,
  //   inputProps: null,
  //   InputProps: null,
  //   inputref: null,
  label: "",
  margin: "normal",
  //   multiline: false,
  name: "field",
  //   onChange: null,
  //   placeholder: "",
  //   required: false,
  //   rows: 2,
  //   rowsMax: 4,
  size: "small",
  type: "text",
  //   value: "",
  variant: "outlined",
};

const Textfield = ({ config }) => {
  console.log("Hola mundo", defaultConfig);
  return <TextField {...defaultConfig} {...config} />;
};

export default Textfield;
