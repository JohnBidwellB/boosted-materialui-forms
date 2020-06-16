export const requiredValidation = (value) => {
  const valid = value.toString().trim() !== "";
  return valid;
};
