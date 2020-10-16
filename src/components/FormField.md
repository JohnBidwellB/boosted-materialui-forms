### Testing with onChange

```jsx padded
import { FormField } from 'boosted-materialui-forms';

const [value, setValue] = React.useState("");
const handleChange = (event, options) => {
  event.preventDefault()
  const {name, value} = event.target
  const {valid, formattedValue} = options
  setValue(value)
}

<FormField 
  config={{ label: 'Controlled component', name: 'Testing onChange'}} 
  value={value} 
  onChange={handleChange} 
  validations={{ required: true, chileanRut: true }}
  formatters={{ chileanRut: true }}
/>
```

### Date and DateTime pickers

##### Date picker

More info [keyboard datepicker](https://material-ui-pickers.dev/api/KeyboardDatePicker)

Date picker returns date value in onChange

```jsx padded
import { FormField } from 'boosted-materialui-forms';
import {useState} from 'react';

const [date, setDate] = useState();
const handleChange = date  => {
  setDate(date)
}
<FormField 
  element="date"
  config={{label: 'date picker', minDate: new Date('01/01/2020'), maxDate: new Date('12/31/2020'), helperText: 'Helper text'}} 
  value={date}
  onChange={handleChange}
  // error="Hola mundo"
/>
```

### Simple FormField

| prop   | type   | description                                                                                               |
| ------ | ------ | --------------------------------------------------------------------------------------------------------- |
| config | object | This props has all config that [Textfield](https://material-ui.com/es/api/text-field/) component provides |

```jsx padded
import { FormField } from 'boosted-materialui-forms';
import {useState} from 'react';

// For controlled components 
const [value, setValue] = useState("");
const handleChange = newValue  => {
    setValue(newValue.value)
}
<FormField 
  config={{label: 'Uncontrolled component' }} 
/>
```

### Controlled components

You can control Formfield value using the prop **`value`** and handle input changes with prop **`change`**.

| prop   | type | description                                                                                                                                              |
| ------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value  | any  | value of input component                                                                                                                                 |
| change | func | callback fired when value changes. **newValue** returns an object {target: string, value: any, valid: boolean}. **`function(newValue: object) => void`** |

```jsx padded
import { FormField } from 'boosted-materialui-forms';

const [value, setValue] = React.useState("");
const handleChange = newValue  => {
    setValue(newValue.value)
}

<FormField 
  config={{ label: 'Controlled component'}} 
  value={value} 
  change={(value) => handleChange(value)} 
/>
```

### Error

FormFields error can be managed via `error` props.

| name  | default value | type            | description   |
| ----- | ------------- | --------------- | ------------- |
| error | false         | string, boolean | Error message |


```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<>
<FormField 
  config={{ label: 'Error', name: 'error' }} 
  error={true}
/> 
<FormField 
  config={{ label: 'Error', name: 'error' }} 
  error="Error message"
/> 
</>
```

### Validations

You can use validations with the props **`validations`**.

Allowed validations:

| name             | default value               | type           | description                          | options                                                                    |
| ---------------- | --------------------------- | -------------- | ------------------------------------ | -------------------------------------------------------------------------- |
| required         | {message: 'Required field'} | bool, object   | set FormField as required            | {message: string}                                                          |
| length           | {}                          | number, object | validate string length               | number, {min: number, minMessage: string, max: number, maxMessage: string} |
| chileanRut       | {message: 'Invalid RUT'}    | bool, object   | checks if chilean rut is writen well | {message: string}                                                          |
| email            | {message: 'Invalid email'}  | bool, object   | checks if email is valid             | {message: string}                                                          |
| chileanCellphone | {}                          | bool, object   | validate chilean cellphone number    | {message: string}                                                          |

```jsx padded 
import {useState, Fragment} from 'react';
import { FormField } from 'boosted-materialui-forms';

const [value, setValue] = useState('');

<Fragment>
  <FormField 
    config={{ id: 'validation-required1',label: 'Required validation' }} 
    validations={{ required: true }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"   "}
  <FormField 
    config={{id: 'validation-required2', label: 'Required validation' }}  
    validations={{ required: { value: true, message: 'You must enter a value'} }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"   "}
  <FormField 
    config={{id: 'validation-length1', label: 'Lenght validation' }}
    validations={{ length: 5 }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"   "}
  <FormField 
    config={{id: 'validation-length2', label: 'Lenght validation' }} 
    validations={{ required: true, length: { min: 6, minMessage: 'You need to have a minimum of 6 characters', max: 10} }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"   "}
  <FormField 
    config={{id: 'validation-chileanrut1', label: 'Validate Chilean rut' }} 
    validations={{ chileanRut: true }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"   "}
  <FormField 
    config={{id: 'validation-chileanrut2', label: 'Validate Chilean rut' }} 
    validations={{ chileanRut: {value: true, message: 'RUT inválido' } }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"  "}
  <FormField 
    config={{id: 'validation-email', label: 'Validate email' }} 
    validations={{ email: { message: 'email inválido' } }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"  "}
  <FormField 
    config={{id: 'validation-chileanCellphone', label: 'Validate celphone' }} 
    validations={{ chileanCellphone: { message: 'Número inválido' } }} 
    value={value} 
    onChange={(event) => setValue(event.target.value)}
  /> {"  "}
</Fragment>;
```

### Formatters

`boosted-materialui-forms` provides input formatters  using **`formatters`** prop.

| name       | default value | type | description                                |
| ---------- | ------------- | ---- | ------------------------------------------ |
| chileanRut | false         | bool | Allow format input with chilean rut format |


```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<FormField 
  config={{ label: 'Format Chilean rut', name: 'rut' }} 
  validations={{ chileanRut: {value: true, message: 'RUT inválido' } }} 
  formatters={{ chileanRut: true }}
/> 
```

### Select

`boosted-materialui-forms` provides `select` and `multiselect`FormField.
For multiselect the value props must be an array.

| prop    | type   | default | description                                                                                        |
| ------- | ------ | ------- | -------------------------------------------------------------------------------------------------- |
| element | string | 'input' | You can change FormField type by changin 'element' props. Options: 'select', 'input', 'multiselect |
| options | array  | []      | Options to select                                                                                  |

```jsx padded
import { FormField } from 'boosted-materialui-forms';
import {useState, useEffect} from 'react';

const options = [{ label: 'Option 1', value: 1}, { label: 'Option 2', value: 2}, { label: 'Option 3', value: 3 }]; 

const [selectedValue, setSelectedValue] = useState(null);
const [multiSelectedValue, setMultiSelectedValue] = useState([ ]);

<>
SelectedValue: {selectedValue}
<FormField 
  element="select" 
  options={options} 
  config={{ name: 'select', label: 'select' }} 
  value={selectedValue} 
  change={(newValue) => setSelectedValue(newValue.value)}/>
MultiSelectedValue: {multiSelectedValue}
<FormField 
  element="multiselect" 
  options={options} 
  config={{ name: 'multiselect', label: 'multiselect' }} 
  value={multiSelectedValue}  
  change={(newValue) => setMultiSelectedValue(newValue.value)} 
  validations={{required: true}}/>
</>
```

### Hooks

`boosted-materialui-forms` has hooks to help you with form management.

#### useFormValidator

This hooks checks if all fields in a form are valid.

```jsx padded
import { useState } from "react";
import { FormField, useFormValidator } from "boosted-materialui-forms";

const [formData, setFormData] = useState({
  name: { value: "", valid: false },
  lastname: { value: "", valid: false },
});

const handleChange = (event, options) => {
  event.preventDefault()
  const {name, value} = event.target
  const {valid} = options;
  setFormData((prevData) => ({
    ...prevData,
    [name]: {
      ...prevData[name],
      value: value,
      valid: valid,
    },
  }));
};

const [formIsValid] = useFormValidator(formData);

<>
  formIsValid: {formIsValid ? 'true' : 'false'}
  <FormField
    config={{ label: "name", name: "name" }}
    onChange={handleChange}
    validations={{ required: true }}
  />
  <FormField
    config={{ label: "lastname", name: "lastname" }}
    onChange={handleChange}
    validations={{ required: true }}
  />
</>;
```

#### useFormErrors

This hook can read validations error messages from different sources adding an errorMessage attribute and changing valid to false in formData object

```jsx padded
import { useState, useEffect } from "react"
import { FormField, useFormError } from "boosted-materialui-forms"

const [formData, setFormData] = useState({
  email: { 
    value: "test@test", 
    valid: false, 
    error: false,
    change: handleChange,
    config: { label: "email", name: "email" }
  },
})

const [errors, setErrors] = useState(null)

const handleChange = (event, options) => {
  const {target, value} = event
  const { valid } = options;
  setFormData((prevData) => ({
    ...prevData,
    [target]: {
      ...prevData[target],
      value: value,
      valid: valid
    },
  }));
};

useEffect(() => {
  if (!errors && !formData.email.errorMessage) {
    setErrors({
    email: {
      properties: {
        message: 'No es un email válido!',
        type: 'user defined',
        path: 'email',
        value: 'test@test',
      },
    },
  })
  } 
}, [formData])

const [formDataWithErrors] = useFormError('mongo', errors, formData);
useEffect(() => {
  setFormData(formDataWithErrors);
}, [formDataWithErrors]);

<>
  <FormField
    {...formData.email}
    // value={formData.email.value}
    // config={{ label: "email", name: "email" }}
    // change={(newValue) => handleChange(newValue)}
    // error={!formData.email.valid ? formData.email.errorMessage : false}
  />
</>
```
