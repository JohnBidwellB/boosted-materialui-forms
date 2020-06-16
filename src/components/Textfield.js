import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { checkValidations } from "../helpers/form.helpers";

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

const Textfield = ({ config, validations }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const updateForm = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  // Run validations
  useEffect(() => {
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
    }
  }, [value]);

  return (
    <TextField
      {...defaultConfig}
      {...config}
      error={error}
      value={value}
      onChange={updateForm}
      helperText={
        error ? message : config?.helperText ? config.helperText : null
      }
    />
  );
};

export default Textfield;
