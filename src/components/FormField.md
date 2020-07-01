### Simple FormField

```jsx padded
import { FormField } from 'boosted-materialui-forms';
import {useState} from 'react';

// For controlled components 
const [value, setValue] = useState("");
const handleChange = newValue  => {
    setValue(newValue.value)
}
<FormField config={{label: 'Uncontrolled component' }} />
```

### Controlled components

You can control Formfield value using the prop **`value`** and handle input changes with prop **`change`**.

| prop   | type | description                                                                                                                                  |
| ------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| value  | any  | value of input component                                                                                                                     |
| change | func | callback fired when value changes. **Valid** returns `null` if prop `validations` is `null`. **`function(value: any, valid: bool) => void`** |

```jsx padded
import { FormField } from 'boosted-materialui-forms';

const [value, setValue] = React.useState("");
const handleChange = newValue  => {
    setValue(newValue.value)
}

<FormField config={{ label: 'Controlled component'}} value={value} change={(value) => handleChange(value)} />

```

### Validations

You can use validations with the props **`validations`**.

Allowed validations:

| name       | default value               | type           | description                          | options                                                                    |
| ---------- | --------------------------- | -------------- | ------------------------------------ | -------------------------------------------------------------------------- |
| required   | {message: 'Required field'} | bool, object   | set FormField as required            | {message: string}                                                          |
| length     | {}                          | number, object | validate string length               | number, {min: number, minMessage: string, max: number, maxMessage: string} |
| chileanRut | {message: 'Invalid RUT'}    | bool, object   | checks if chilean rut is writen well | {message}                                                                  |


```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<>
<FormField config={{ id: 'validation-required1',label: 'Required validation' }} validations={{ required: true }}/> {"   "}
<FormField config={{id: 'validation-required2', label: 'Required validation' }} validations={{ required: { value: true, message: 'You must enter a value'} }}/> {"   "}
<FormField config={{id: 'validation-length1', label: 'Lenght validation' }} validations={{ length: 5 }}/> {"   "}
<FormField config={{id: 'validation-length2', label: 'Lenght validation' }} validations={{ required: true, length: { min: 6, minMessage: 'You need to have a minimum of 6 characters', max: 10} }}/> {"   "}
<FormField config={{id: 'validation-chileanrut1', label: 'Validate Chilean rut' }} validations={{ chileanRut: true }}/> {"   "}
<FormField config={{id: 'validation-chileanrut2', label: 'Validate Chilean rut' }} validations={{ chileanRut: {value: true, message: 'RUT inválido' } }}/> {"  "}
</>
```

### Formatters

`boosted-materialui-forms` provides input formatters  using **`formatters`** prop.

| name       | default value | type | description                                |
| ---------- | ------------- | ---- | ------------------------------------------ |
| chileanRut | false         | bool | Allow format input with chilean rut format |


```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<FormField config={{ label: 'Format Chilean rut', name: 'rut' }} validations={{ chileanRut: {value: true, message: 'RUT inválido' } }} formatters={{ chileanRut: true }}/> 
```

### Hooks

`boosted-materialui-forms` brings hooks to help you with form management.

#### useFormValidator

This hooks checks if all fields in a form are valid.

```jsx padded
import { useState } from "react";
import { FormField, useFormValidator } from "boosted-materialui-forms";

const [formData, setFormData] = useState({
  name: { value: "", valid: false },
  lastname: { value: "", valid: false },
});

const handleChange = (newValue, isValid) => {
  const { target, value } = newValue;
  setFormData((prevData) => ({
    ...prevData,
    [target]: {
      ...prevData[target],
      value: value,
      valid: isValid,
    },
  }));
};

const [formIsValid] = useFormValidator(formData);

<>
  formIsValid: {formIsValid ? 'true' : 'false'}
  <FormField
    config={{ label: "name", name: "name" }}
    change={(newValue, valid) => handleChange(newValue, valid)}
    validations={{ required: true }}
  />
  <FormField
    config={{ label: "lastname", name: "lastname" }}
    change={(newValue, valid) => handleChange(newValue, valid)}
    validations={{ required: true }}
  />
</>;
```