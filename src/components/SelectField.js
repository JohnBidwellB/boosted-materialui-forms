import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";

const defaultConfig = {
  //   autoComplete: "",
  //   autoFocus: false,
  //   classes: null,
  color: "primary",
  //   defaultValue: "",
  //   disabled: false,
  error: false,
  //   FormHelperTextProps: null,
  //   fullWidth: false,
  helperText: null,
  // id: "field",
  //   InputLabelProps: null,
  //   inputProps: null,
  //   InputProps: null,
  //   inputref: null,
  label: "",
  margin: "normal",
  //   multiline: false,
  // name: "field",
  //   placeholder: "",
  //   required: false,
  //   rows: 2,
  //   rowsMax: 4,
  size: "small",
  type: "text",
  variant: "outlined",
};

const SelectField = ({
  config,
  validations = null,
  formatters = null,
  value: propsValue,
  change = null,
  options = [],
}) => {
  const [fieldConfig] = useState({ ...defaultConfig, ...config });
  return <TextField {...fieldConfig} />;
};

export default SelectField;
