---
group:
  title: 表单组件
  path: /components/formComponents
  order: 1

order: 3
---

# Checkbox 复选框

表单输入选项，可以单选多选，拥有较大自由度，是一种标记组件。

## 基本使用

> 一个 checkbox 作为一个独立输入项，独立控制它的状态。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Checkbox } from 'moon-ui';

const CheckboxDemo: FC = (): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <Space size="small">
        <Checkbox
          checked={checked}
          onChange={(checked, e) => {
            setChecked(checked);
          }}
        >
          Checkbox
        </Checkbox>

        <Checkbox
          checked={true}
          disabled
          onChange={(checked, e) => {
            setChecked(checked);
          }}
        >
          Checkbox
        </Checkbox>
      </Space>
    </Fragment>
  );
};

export default CheckboxDemo;
```

## 按钮组

> 一个按钮组。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Checkbox } from 'moon-ui';

const CheckboxGroup = Checkbox.Group;

const CheckboxDemo: FC = (): ReactElement => {
  const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
  ];
  return (
    <Fragment>
      <Space size="small">
        <CheckboxGroup options={options} value={['1']}></CheckboxGroup>
      </Space>
    </Fragment>
  );
};

export default CheckboxDemo;
```
