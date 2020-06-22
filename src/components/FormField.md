Simple FormField

```jsx padded
import { FormField } from 'boosted-materialui-forms';
import {useState} from 'react';

// For controlled components 
const [value, setValue] = useState("hola");
const handleChange = isValid  => {
    console.log("Proyecto lupa")
    console.log("isvalid: ", isValid)
    // console.log("event: ", event)
    // console.log(event.target.value)
    // setValue(event.target.value)
}

<>
<FormField config={{ label: 'Controlled component', id: "controlled-component" }} value={value} change={(isValid) => handleChange(isValid)} />
<FormField config={{label: 'Uncontrolled component', id: "uncontrolled-component" }} />
</>
```

Label + Placeholder
```jsx padded 

import { FormField } from 'boosted-materialui-forms';

<FormField config={{ id: 'label+placeholder', label: 'Name', placeholder: 'John' }} />
```

Variant

```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{id: 'variant-filled', variant: 'filled', label: 'filled' }} />{"   "}
    <FormField config={{id: 'variant-outlined', variant: 'outlined', label:'outlined' }} />{"   "}
    <FormField config={{id: 'variant-standard', variant: 'standard', label: 'standard' }} />
</>
```

Margin and Full Width

```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{ id: 'margin-dense', margin: 'dense', fullWidth: true, label: 'margin dense + fullWidth' }} />{"   "}
    <FormField config={{ id: 'margin-normal', margin: 'normal', label: 'margin normal' }} />{"   "}
    <FormField config={{ id: 'margin-none', margin: 'none', fullWidth: true, label: 'margin none' }} />
</>
```

Type
```jsx padded 
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{ id: 'type-text',type: 'text', label: 'text' }} />{"   "}
    <FormField config={{ id: 'type-number',type: 'number', label: 'number' }} />{"   "}
    <FormField config={{ id: 'type-password',type: 'password', label: 'password' }} />{"   "}
</>
```

Validations

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

Formatters

```jsx padded 
import { FormField } from 'boosted-materialui-forms';
import { useEffect, useState } from 'react';

const [isValid, setIsValid] = useState(false);
const [foo, setFoo] = useState(null)
// For controlled components 
const [value, setValue] = useState("hola");
const handleChange = (values, valid) => {
    console.log(values)
    console.log(valid)
    setFoo(event.target.value)
    setIsValid(valid);
    setValue(event.target.value)
}
<>
IsValid: {isValid ? 'true' : 'false'} 
<FormField value={value} change={(values, isValid) => handleChange(values, isValid)} config={{ id: 'format-chileanrut', label: 'Format Chilean rut', name: 'rut' }} validations={{ chileanRut: {value: true, message: 'RUT inválido' } }} formatters={{ chileanRut: true }}/> 
</>
```

