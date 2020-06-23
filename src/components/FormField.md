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
import { useEffect, useState } from 'react';

const [isValid, setIsValid] = useState(false);
const [foo, setFoo] = useState(null)
// For controlled components 
const [value, setValue] = useState("hola");
const handleChange = (values, valid) => {
    setFoo(event.target.value)
    setIsValid(valid);
    setValue(event.target.value)
}
<>
IsValid: {isValid ? 'true' : 'false'} 
<FormField value={value} change={(values, isValid) => handleChange(values, isValid)} config={{ id: 'format-chileanrut', label: 'Format Chilean rut', name: 'rut' }} validations={{ chileanRut: {value: true, message: 'RUT inválido' } }} formatters={{ chileanRut: true }}/> 
</>
```

