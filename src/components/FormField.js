import React from "react";
// import { TextField } from "@material-ui/core";
import Field from "./Field";
// import styled from "@emotion/styled";
// import { font, primaryColors, shape } from "config/styles";

// const Wrapper = styled.button`
//   ${font}
//   ${primaryColors}
//   ${shape}
// `;
import propTypes from "prop-types";

/**
 * FormField component with MaterialUI
 */
export default function FormField({
  element = "input",
  change = null,
  value = null,
  config = null,
  validations = null,
  formatters = null,
}) {
  // return <Wrapper><TextField variant="outlined" label={label} /></Wrapper>;
  return (
    <Field
      element={element}
      config={config}
      validations={validations}
      formatters={formatters}
      value={value}
      change={change}
    />
  );
}

FormField.defaultProps = {
  element: "input",
  change: null,
  value: null,
  config: {
    color: "primary",
    margin: "normal",
    size: "small",
    type: "text",
    variant: "outlined",
  },
  validations: null,
  formatters: null,
};
FormField.propTypes = {
  /**
   * Type of input to display.
   */
  element: propTypes.oneOf(["input"]),
  /**
   * Function to control FormField value and validations.
   */
  change: propTypes.func,
  /**
   * When using controlled component, is has input value.
   */
  value: propTypes.node,
  /**
   * MaterialUI TextField config.
   */
  config: propTypes.object,
  /**
   * Validate input.
   */
  validations: propTypes.object,
  /**
   * Format input.
   */
  formatters: propTypes.object,
};