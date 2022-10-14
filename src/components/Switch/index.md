# Switch 开关

互斥性的操作控件，用户可打开或关闭某个功能。

## 基本使用

> 控制一个值在两种状态间切换。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Switch } from 'moon-ui';

const SwitchDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Switch />
    </Fragment>
  );
};

export default SwitchDemo;
```

## 受控模式

> 控制 Switch 状态。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Switch } from 'moon-ui';

const SwitchDemo: FC = (): ReactElement => {
  const [checked, setChecked] = useState(false);

  const setCheckedFun = (value, e) => {
    setChecked(value);
  };
  return (
    <Fragment>
      <Switch value={checked} onChange={setCheckedFun} />
    </Fragment>
  );
};

export default SwitchDemo;
```

## 设置尺寸

> 设置 Swicth 尺寸。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Switch, Space } from 'moon-ui';

const SwitchDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Switch size="small" />
        <Switch size="medium" />
        <Switch size="large" />
      </Space>
    </Fragment>
  );
};

export default SwitchDemo;
```

## 设置禁用

> 设置 Swicth 禁用。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Switch, Space } from 'moon-ui';

const SwitchDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Switch size="small" disabled />
        <Switch size="medium" disabled />
        <Switch size="large" disabled />
      </Space>
      <Space size="small">
        <Switch value={true} size="small" disabled />
        <Switch value={true} size="medium" disabled />
        <Switch value={true} size="large" disabled />
      </Space>
    </Fragment>
  );
};

export default SwitchDemo;
```

## 自定义 Switch 颜色

> 给 Switch 设置你喜欢的颜色。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Switch, Space } from 'moon-ui';

const SwitchDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Switch size="medium" activeColor="orange" inActiveColor="skyblue" />
      </Space>
    </Fragment>
  );
};

export default SwitchDemo;
```

## 自定义 Ball

> 自定义 Switch ball 颜色 & 内容。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Switch, Space } from 'moon-ui';

const SwitchDemo: FC = (): ReactElement => {
  const [checked, setChecked] = useState(false);

  const setCheckedFun = (value, e) => {
    setChecked(value);
  };
  return (
    <Fragment>
      <Space size="small">
        <Switch size="medium" activeColor="orange" inActiveColor="skyblue" ballColor="#7ebc59" />
        <Switch
          value={checked}
          size="medium"
          activeColor="orange"
          inActiveColor="skyblue"
          onChange={setCheckedFun}
          ballContent={
            <span style={{ color: 'black', fontSize: '10px' }}>{checked ? '关' : '开'}</span>
          }
        />
      </Space>
    </Fragment>
  );
};

export default SwitchDemo;
```

<API></API>
