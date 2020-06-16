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

export default function FormField({
  element = "input",
  onchange,
  value,
  config = null,
  validations = null,
  formatters = null,
}) {
  // return <Wrapper><TextField variant="outlined" label={label} /></Wrapper>;
  return (
    <Field element={element} config={config} />
    // <TextField

    //   variant={variant ? variant : "outlined"}
    //   label={label ? label : "Default"}
    // />
  );
}

// export default Button;
