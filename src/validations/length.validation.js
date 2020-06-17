export const lengthValidation = (value, options) => {
  const lengthOptions =
    typeof options === 'object'
      ? {
          min: options.min,
          max: options.max,
          minMessage: options.minMessage
            ? options.minMessage
            : `This field must have a minnimum of ${options.min} characters`,
          maxMessage: options.maxMessage
            ? options.maxMessage
            : `This field must have a maximum of ${options.max} characters`,
        }
      : {
          min: options,
          minMessage: `This field must have a minnimum of ${options} characters`,
        };

  const length = value.toString().trim().length;
  let valid = true;
  let message = null;

  if (length < lengthOptions.min) {
    valid = false;
    message = lengthOptions.minMessage;
  } else if (lengthOptions.max && lengthOptions.max < length) {
    valid = false;
    message = lengthOptions.maxMessage;
  }
  return [valid, message];
};
