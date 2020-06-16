import React from "react";
import Textfield from "./Textfield";

// const showError = (data) => {
//   const hasError = formData.validation && !formData.valid;
//   return hasError ? (
//     <div className="error_label">{formData.validationMessage}</div>
//   ) : null;
// };

const TemplateToRender = ({ element, config, validations }) => {
  switch (element) {
    case "input":
      return <Textfield config={config} validations={validations} />;
    default:
      return <Textfield config={config} validations={validations} />;
  }
};

const Field = ({ element, config, validations }) => {
  return (
    <TemplateToRender
      element={element}
      config={config}
      validations={validations}
    />
  );
};

export default Field;
