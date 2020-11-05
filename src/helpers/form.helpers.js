import { requiredValidation } from "../validations/required.validation";
import { lengthValidation } from "../validations/length.validation";
import { rutValidation } from "../validations/rut.validation";
import { chileanPatentValidation, emailValidation } from "../validations";
import { chileanPhonesValidation } from "../validations/cellphone.validation";

export const checkValidations = (value, validations) => {
	let hasError = false;
	let validationMessage = "";

	Object.entries(validations).map(([key, options]) => {
		switch (key) {
			case "required":
				let passRequired = requiredValidation(value);
				hasError = hasError || !passRequired;
				validationMessage = options.message
					? options.message
					: "Required field";
				return;
			case "length":
				let [lengthValid, message] = lengthValidation(value, options);
				hasError = hasError || !lengthValid;
				validationMessage = message;
				return;
			case "chileanRut":
				let rutValid = rutValidation(value);
				hasError = hasError || !rutValid;
				validationMessage = options.message ? options.message : "Invalid RUT";
				return;
			case "email":
				let emailValid = emailValidation(value);
				hasError = hasError || !emailValid;
				validationMessage = options.message ? options.message : "Invalid email";
				return;
			case "chileanPhone":
				let cellphoneValid = chileanPhonesValidation(value);
				hasError = hasError || !cellphoneValid;
				validationMessage = options.message
					? options.message
					: "Invalid phone number";
				return;
			case 'chileanPatent':
				let chileanPatentValid = chileanPatentValidation(value);
				hasError = hasError || !chileanPatentValid;
				validationMessage = options.message
					? options.message
					: "Invalid patent";
				return;
			default:
				return;
		}
	});

	return { hasError, validationMessage };
};
