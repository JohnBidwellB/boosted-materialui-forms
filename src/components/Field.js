import React from "react";
import Textfield from "./Textfield";

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
}) => {
  return (
    <TemplateToRender
      element={element}
      config={config}
      validations={validations}
      formatters={formatters}
      value={value}
      change={change}
    />
  );
};

export default Field;
