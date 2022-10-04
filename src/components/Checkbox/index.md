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

> 一个 checkbox 作为一个独立输入项，独立控制它的状态。与其他组件库不同，本组件库 Checkbox 不支持 defaultValue，仅支持受控模式，也就是不传入 checked 和 onChange 无法控制 checkbox 选中态。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Checkbox } from 'moon-ui';

const CheckboxDemo: FC = (): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <Checkbox
        checked={checked}
        onChange={(checked) => {
          setChecked(checked);
        }}
      >
        选项一
      </Checkbox>
    </Fragment>
  );
};

export default CheckboxDemo;
```

## 禁用

> 禁用 checkbox

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Checkbox } from 'moon-ui';

const CheckboxDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Checkbox disabled checked={true}>
        选项一
      </Checkbox>

      <Checkbox disabled checked={false}>
        选项二
      </Checkbox>
    </Fragment>
  );
};

export default CheckboxDemo;
```

## 半选

> 半选态 checkbox，checked 优先级高于 halfChecked

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Checkbox } from 'moon-ui';

const CheckboxDemo: FC = (): ReactElement => {
  const [checked, setChecked] = useState(true);
  return (
    <Fragment>
      <Checkbox
        onChange={(checked) => {
          setChecked(checked);
        }}
        halfChecked={checked}
      >
        选项一
      </Checkbox>
    </Fragment>
  );
};

export default CheckboxDemo;
```

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

## 组禁用

> 复选框禁用。

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
        disabled
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

## 纵向排布

> direction 设置复选框横纵排布。

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
        direction="vertical"
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

<API></API>

<API src='/group.tsx'></API>
