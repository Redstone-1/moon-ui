---
group:
  title: 表单组件
  path: /components/formComponents
  order: 2

order: 3
---

# Radio 单选框

表单输入选项，单选，在多个选择项中选择符合的一项。同样的，Radio 仅支持受控模式。

## 基本使用

> 单个 Radio。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Radio } from 'moon-ui';

const RadioDemo: FC = (): ReactElement => {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <Radio
        checked={checked}
        onChange={(checked) => {
          console.log('checked', checked);
          setChecked(checked);
        }}
      >
        选项一
      </Radio>

      <Radio
        disabled
        checked={checked}
        onChange={(checked) => {
          console.log('checked', checked);
          setChecked(checked);
        }}
      >
        选项禁用
      </Radio>
    </Fragment>
  );
};

export default RadioDemo;
```

## 单选组

> 配合 RadioGroup 使用。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Radio } from 'moon-ui';

const RadioGroup = Radio.Group;

const RadioGroupDemo: FC = (): ReactElement => {
  const [value, setValue] = useState('1');

  const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
  ];
  return (
    <Fragment>
      <RadioGroup
        options={options}
        value={value}
        onChange={(value, e) => {
          console.log('value', value);
          setValue(value);
        }}
      >
        选项一
      </RadioGroup>
    </Fragment>
  );
};

export default RadioGroupDemo;
```

## 纵向布局

> 单选组纵向布局

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Radio } from 'moon-ui';

const RadioGroup = Radio.Group;

const RadioGroupDemo: FC = (): ReactElement => {
  const [value, setValue] = useState('1');

  const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
  ];

  const options2 = [
    { label: '整组禁用', value: '1' },
    { label: '整组禁用', value: '2' },
  ];
  return (
    <Fragment>
      <RadioGroup
        direction="vertical"
        options={options}
        value={value}
        onChange={(value, e) => {
          console.log('value', value);
          setValue(value);
        }}
      ></RadioGroup>

      <RadioGroup disabled direction="vertical" options={options2}></RadioGroup>
    </Fragment>
  );
};

export default RadioGroupDemo;
```

## Button 类型

> 按钮类型单选组。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Radio } from 'moon-ui';

const RadioGroup = Radio.Group;

const RadioGroupDemo: FC = (): ReactElement => {
  const [value, setValue] = useState('1');

  const options = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
  ];
  return (
    <Fragment>
      <RadioGroup
        type="button"
        direction="vertical"
        options={options}
        value={value}
        onChange={(value, e) => {
          console.log('value', value);
          setValue(value);
        }}
      ></RadioGroup>
    </Fragment>
  );
};

export default RadioGroupDemo;
```

<API></API>

<API src='./group.tsx'></API>
