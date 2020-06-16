import { requiredValidation } from "../validations/required.validation";

export const checkValidations = (value, validations) => {
  let hasError = false;
  let validationMessage = "";
//   let updatedValidations = { ...validations };

  Object.entries(validations).map(([key, options]) => {
    switch (key) {
      case "required":
        const passValidation = requiredValidation(value);
        hasError = hasError || !passValidation;
        validationMessage = options.message
          ? options.message
          : "Required field";
      // updatedValidations = {
      //   ...updatedValidations,
      //   required: {
      //     ...updatedValidations.required,
      //     value: true,
      //     valid: passValidation,
      //     message: options.message ? options.message : "Required field",
      //   },
      // };
      default:
        return;
    }
  });

  return { hasError, validationMessage };
};
