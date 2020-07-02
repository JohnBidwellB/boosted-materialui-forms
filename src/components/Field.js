import React from "react";
import Textfield from "./Textfield";
import SelectField from "./SelectField";

// const showError = (data) => {
//   const hasError = formData.validation && !formData.valid;
//   return hasError ? (
//     <div className="error_label">{formData.validationMessage}</div>
//   ) : null;
// };

const TemplateToRender = ({
  element,
  config,
  validations,
  formatters,
  value,
  change,
  options,
}) => {
  switch (element) {
    case "input":
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
        />
      );
    case "select":
      return (
        <Textfield
          config={config}
          validation={validations}
          formatters={formatters}
          value={value}
          change={change}
          options={options}
          element="select"
        />
      );
    default:
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
        />
      );
  }
};

const Field = ({
  element,
  config,
  validations,
  formatters,
  value,
  change,
  options,
}) => {
  return (
    <TemplateToRender
      element={element}
      config={config}
      validations={validations}
      formatters={formatters}
      value={value}
      change={change}
      options={options}
    />
  );
};

export default Field;
