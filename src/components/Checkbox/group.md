---
group:
  title: 表单组件
  path: /components/formComponents
  order: 2

order: 3
---

# Checkbox 复选框组

## 复选框组

> 一个复选框组。同样的，CheckboxGroup 仅支持受控模式，options & onChange & values 必传。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Checkbox } from 'moon-ui';

const CheckboxGroup = Checkbox.Group;

const CheckboxDemo: FC = (): ReactElement => {
  const [values, setValues] = useState(['1']);
  const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3' },
  ];
  return (
    <Fragment>
      <CheckboxGroup
        options={options}
        values={values}
        onChange={(value, e) => {
          console.log('value', value);
          setValues(values);
        }}
      ></CheckboxGroup>
    </Fragment>
  );
};

export default CheckboxDemo;
```

<API src='./group.tsx'></API>
