import React from "react";
import { TextField } from "@material-ui/core";
import Textfield from "./Textfield";

// const showError = (data) => {
//   const hasError = formData.validation && !formData.valid;
//   return hasError ? (
//     <div className="error_label">{formData.validationMessage}</div>
//   ) : null;
// };

const TemplateToRender = ({ element, config }) => {
  switch (element) {
    case "input":
      return <Textfield config={config} />;
    default:
      return <Textfield config={config} />;
  }
};

const Field = ({ element, config }) => {
  return <TemplateToRender element={element} config={config} />;
};

export default Field;
