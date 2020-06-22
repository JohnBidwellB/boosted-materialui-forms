import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { checkValidations } from "../helpers/form.helpers";
import { formatValue } from "../helpers/formatters.helpers";

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
  id: "field",
  //   InputLabelProps: null,
  //   inputProps: null,
  //   InputProps: null,
  //   inputref: null,
  label: "",
  margin: "normal",
  //   multiline: false,
  name: "field",
  //   placeholder: "",
  //   required: false,
  //   rows: 2,
  //   rowsMax: 4,
  size: "small",
  type: "text",
  variant: "outlined",
};

const Textfield = ({
  config,
  validations = null,
  formatters = null,
  value: propsValue,
  change = null,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (propsValue) {
      setValue(propsValue);
    }
  }, [propsValue]);

  const updateForm = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  // Run validations
  useEffect(() => {
    let returnIsValid = false;
    if (validations) {
      const { hasError, validationMessage } = checkValidations(
        value,
        validations
      );
      if (hasError) {
        setError(true);
        setMessage(validationMessage);
      } else {
        setError(false);
      }
      returnIsValid = !hasError;
    }
    if (formatters) {
      const newValue = formatValue(value, formatters);
      setValue(newValue);
    }

    if (change) {
      // console.log(change)
      change(returnIsValid);
    }
  }, [value]);

  return (
    <TextField
      {...defaultConfig}
      {...config}
      error={error}
      value={value}
      // onChange={change ? change() : updateForm}
      onChange={updateForm}
      helperText={
        error ? message : config?.helperText ? config.helperText : null
      }
    />
  );
};

export default Textfield;
