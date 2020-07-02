import React, { useState, useEffect } from "react";
import { TextField, MenuItem } from "@material-ui/core";
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

const Textfield = ({
  element = "input",
  config,
  validations = null,
  formatters = null,
  value: propsValue,
  change = null,
  options = null,
}) => {

  const [fieldConfig] = useState({
    ...defaultConfig,
    ...config,
    select: element === "select" ? true : false,
  });

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false); // For the first render, it will not show that has an error

  useEffect(() => {
    if (propsValue) {
      setValue(propsValue);
    }
  }, [propsValue]);

  const updateForm = (event) => {
    event.preventDefault();
    if (!showError) {
      setShowError(true);
    }
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
      change(
        { target: fieldConfig.name, value: value },
        validations ? returnIsValid : null
      );
    }
  }, [value]);

  return (
    <TextField
      {...fieldConfig}
      error={showError && error}
      value={value}
      onChange={updateForm}
      helperText={
        error && showError
          ? message
          : config?.helperText
          ? config.helperText
          : null
      }
    >
      {element === "select" && options && (
        <>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </>
      )}
    </TextField>
  );
};

export default Textfield;
