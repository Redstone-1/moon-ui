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

<API></API>
