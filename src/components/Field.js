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
  error,
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
          error={error}
        />
      );
    case "select":
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
          options={options}
          element="select"
          error={error}
        />
      );
    case "multiselect":
      return (
        <Textfield
          config={config}
          validations={validations}
          formatters={formatters}
          value={value}
          change={change}
          options={options}
          element={element}
          error={error}
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
          error={error}
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
  error,
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
      error={error}
    />
  );
};

export default Field;
