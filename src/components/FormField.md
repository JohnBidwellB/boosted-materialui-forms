Simple FormField

```jsx
import { FormField } from 'boosted-materialui-forms';

<FormField />
```

Label + Placeholder
```jsx

import { FormField } from 'boosted-materialui-forms';

<FormField config={{ label: 'Name', placeholder: 'John' }} />
```

Variant

```jsx
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{variant: 'filled', label: 'filled' }} />{"   "}
    <FormField config={{variant: 'outlined', label:'outlined' }} />{"   "}
    <FormField config={{variant: 'standard', label: 'standard' }} />
</>
```

Margin and Full Width

```jsx
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{ margin: 'dense', fullWidth: true, label: 'margin dense + fullWidth' }} />{"   "}
    <FormField config={{ margin: 'normal', label: 'margin normal' }} />{"   "}
    <FormField config={{ margin: 'none', fullWidth: true, label: 'margin none' }} />
</>
```

Type
```jsx
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{ type: 'text', label: 'text' }} />{"   "}
    <FormField config={{ type: 'number', label: 'number' }} />{"   "}
</>
```

Validations

```jsx
import { FormField } from 'boosted-materialui-forms';

<>
<FormField config={{ label: 'Required validation' }} validations={{ required: true }}/> {"   "}
<FormField config={{ label: 'Required validation' }} validations={{ required: { value: true, message: 'Required field'} }}/> {"   "}
</>
```