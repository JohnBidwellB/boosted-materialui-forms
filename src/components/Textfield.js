import React, { useState, useEffect } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { checkValidations } from "../helpers/form.helpers";
import { formatValue } from "../helpers/formatters.helpers";

const defaultConfig = {
	//   autoComplete: "",
	//   autoFocus: false,
	//   classes: null,
	color: "primary",
	//   defaultValue: "",
	//   disabled: false,
	error: false,
	//   FormHelperTextProps: null,
	//   fullWidth: false,
	helperText: null,
	// id: "field",
	//   InputLabelProps: null,
	//   inputProps: null,
	//   InputProps: null,
	//   inputref: null,
	label: "",
	margin: "normal",
	//   multiline: false,
	// name: "field",
	//   placeholder: "",
	//   required: false,
	//   rows: 2,
	//   rowsMax: 4,
	size: "small",
	type: "text",
	variant: "outlined",
};

const isSelect = (element) => {
	switch (element) {
		case "select":
			return true;
		case "multiselect":
			return true;
		default:
			return false;
	}
};

const setInitialValue = (element, initialValue) => {
	switch (element) {
		case "multiselect":
			return initialValue ? initialValue : [];
		default:
			return initialValue ? initialValue : "";
	}
};

const Textfield = ({
	element,
	config,
	validations,
	formatters,
	value: propsValue,
	change,
	options,
	error,
	onChange,
}) => {
	const [fieldConfig] = useState({
		...defaultConfig,
		...config,
		select: isSelect(element),
	});

	const [value, setValue] = useState(setInitialValue(element, propsValue));
	// const [error, setError] = useState(errorProps)
	const [message, setMessage] = useState("");
	const [showError, setShowError] = useState(false || Boolean(error)); // For the first render, it will not show that has an error
	const [allowShowValidationError, setAllowShowValidationError] = useState(
		false
	);
	const [showValidationError, setShowValidationError] = useState(false);

	useEffect(() => {
		setValue(propsValue);
	}, [propsValue]);

	const updateForm = (event) => {
		event.preventDefault();
		if (!allowShowValidationError) {
			setAllowShowValidationError(true);
		}
		if (onChange) {
			const handleOnChange = async () => {
				let isValid = true;
				let formattedValue = event.target.value;
				if (validations && !error) {
					const { hasError, validationMessage } = checkValidations(
						formattedValue,
						validations
					);
					if (hasError) {
						setShowValidationError(true);
						setMessage(validationMessage);
					} else {
						setShowValidationError(false);
					}
					isValid = !hasError;
				}
				if (formatters) {
					formattedValue = formatValue(formattedValue, formatters);
				}
				setValue(formattedValue);
				onChange(event, { valid: isValid, formattedValue: formattedValue });
			};
			handleOnChange();
		} else {
			if (event.target.value !== value) {
				setValue(event.target.value);
			}
		}
	};

	useEffect(() => {
		if (error) {
			setMessage(error);
			setShowError(true);
		} else {
			setShowError(false);
		}
	}, [error]);

	// Run validations
	useEffect(() => {
		if (!onChange) {
			let isValid = true;
			if (validations && !error) {
				const { hasError, validationMessage } = checkValidations(
					value,
					validations
				);
				if (hasError) {
					setShowValidationError(true);
					setMessage(validationMessage);
				} else {
					setShowValidationError(false);
				}
				isValid = !hasError;
			}
			if (formatters) {
				const newValue = formatValue(value, formatters);
				setValue(newValue);
			}
			if (change && value !== propsValue) {
				change({ target: fieldConfig.name, value: value, valid: isValid });
			}
		}
	}, [value, error]);

	switch (element) {
		case "select":
			return (
				<TextField
					{...fieldConfig}
					error={showError || (showValidationError && allowShowValidationError)}
					value={value}
					onChange={updateForm}
					helperText={
						showError || (showValidationError && allowShowValidationError)
							? message
							: config?.helperText
							? config.helperText
							: null
					}
				>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
					)}
				</TextField>
			);
		case "multiselect":
			return (
				<TextField
					{...fieldConfig}
					error={showError || (showValidationError && allowShowValidationError)}
					value={value}
					onChange={updateForm}
					helperText={
						showError || (showValidationError && allowShowValidationError)
							? message
							: config?.helperText
							? config.helperText
							: null
					}
					SelectProps={{ multiple: true }}
				>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			);
		default:
			return (
				<TextField
					{...fieldConfig}
					error={showError || (showValidationError && allowShowValidationError)}
					value={value}
					// onChange={onChange ? onChange : updateForm}
					onChange={updateForm}
					helperText={
						showError || (showValidationError && allowShowValidationError)
							? message
							: config?.helperText
							? config.helperText
							: null
					}
				/>
			);
	}
};

export default Textfield;
