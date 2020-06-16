import React from "react";
import { TextField } from "@material-ui/core";
// import styled from "@emotion/styled";
// import { font, primaryColors, shape } from "config/styles";

// const Wrapper = styled.button`
//   ${font}
//   ${primaryColors}
//   ${shape}
// `;

export default function FormField({ label, variant }) {
  // return <Wrapper><TextField variant="outlined" label={label} /></Wrapper>;
  return (
    <TextField
      variant={variant ? variant : "outlined"}
      label={label ? label : "Default"}
    />
  );
}

// export default Button;
