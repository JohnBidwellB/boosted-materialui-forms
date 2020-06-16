'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var core = require('@material-ui/core');

// import { font, primaryColors, shape } from "config/styles";
// const Wrapper = styled.button`
//   ${font}
//   ${primaryColors}
//   ${shape}
// `;

function FormField(_ref) {
  var label = _ref.label;
  // return <Wrapper><TextField variant="outlined" label={label} /></Wrapper>;
  return /*#__PURE__*/React.createElement(core.TextField, {
    variant: "outlined",
    label: label
  });
} // export default Button;

exports.FormField = FormField;
