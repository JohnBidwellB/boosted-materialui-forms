Simple FormField

```jsx
import { FormField } from 'boosted-materialui-forms';

<FormField />
```

Variant

```jsx
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{variant: 'filled'}} />{"   "}
    <FormField config={{variant: 'outlined'}} />{"   "}
    <FormField config={{variant: 'standard'}} />
</>
```

Label + Placeholder
```jsx

import { FormField } from 'boosted-materialui-forms';

<FormField config={{ label: 'Name', placeholder: 'John' }} />
```

Margin and Full Width

```jsx
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{ margin: 'dense', fullWidth: true }} />{"   "}
    <FormField config={{ margin: 'normal' }} />{"   "}
    <FormField config={{ margin: 'none', fullWidth: true }} />
</>
```

Type
```jsx
import { FormField } from 'boosted-materialui-forms';

<>
    <FormField config={{ type: 'text' }} />{"   "}
    <FormField config={{ type: 'number' }} />{"   "}
</>
```