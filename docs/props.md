*FormField* has the following props.

| Name        | Type                          | Default | Description                       |
| ----------- | ----------------------------- | ------- | --------------------------------- |
| element     | string                        | 'input' | Type of input to use              |
| onChange    | function                      | null    | Callback fired when value changes |
| value       | string, number, boolean, date | null    | Value of input                    |
| config      | object                        | {}      | Props from MaterialUI TextField   |
| validations | object                        | null    | Validations for input value       |
| formatters  | object                        | null    | Input formatters                  |
| error       | boolean, string               | null    | Error message                     |

### element 

Options for *element* props are:

| option      | description                           |
| ----------- | ------------------------------------- |
| input       | Let you add text to form field        |
| select      | Display a list with options to select |
| multiselect | Let you select multiple options       |
| date        | Show a calendar to select a date      |

### onChange

This functions fires a *date* callback when using date element and an *(event, options)* callback in other cases.

*options* is an object that includes:

| Property       | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| valid          | Indicate if input is valid, return true if validations object is null |
| formattedValue | Input value formatted                                                 |

### config

 [MaterialUI TextField](https://material-ui.com/api/text-field/#textfield-api) props are passed in this object, except error, onChange and value.

 When using *date* element, it also accept props from [KeyboardDatePicker](https://material-ui-pickers.dev/api/KeyboardDatePicker).

 ### validations

 Validations for input value.

 | name       | default value | type            | description                          | options                                                                    |
 | ---------- | ------------- | --------------- | ------------------------------------ | -------------------------------------------------------------------------- |
 | required   | null          | boolean, object | set FormField as required            | {message: string}                                                          |
 | length     | null          | number, object  | validate string length               | number, {min: number, minMessage: string, max: number, maxMessage: string} |
 | chileanRut | null          | boolean, object | checks if chilean rut is writen well | {message: string}                                                          |

 ### formatters

Formatted value is returned in options callback when using onChange props.


| name       | default value | type            | description                                | options           |
| ---------- | ------------- | --------------- | ------------------------------------------ | ----------------- |
| chileanRut | null          | boolean, object | Allow format input with chilean rut format | {message: string} |