import React from "react";
import Field from "./Field";
import PropTypes from "prop-types";

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
  options = null,
}) {
  return (
    <Field
      element={element}
      config={config}
      validations={validations}
      formatters={formatters}
      value={value}
      change={change}
      options={options}
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
  element: PropTypes.oneOf(["input", "select", "multiselect"]),
  /**
   * Function to control FormField value and validations.
   */
  change: PropTypes.func,
  /**
   * When using controlled component, is has input value.
   */
  value: PropTypes.node,
  /**
   * MaterialUI TextField config.
   */
  config: PropTypes.object,
  /**
   * Validate input.
   */
  validations: PropTypes.object,
  /**
   * Format input.
   */
  formatters: PropTypes.object,
  /**
   * Options when selected element is enabled.
   */
  options: PropTypes.array,
};
