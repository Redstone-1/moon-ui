# Spin 加载中

用于页面和区块的加载中状态 - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本使用

> 一个简单的 loading 状态。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Spin } from 'moon-ui';

const SpinDemo: FC = (): ReactElement => {
  return <Spin loading />;
};

export default SpinDemo;
```

## 包裹子组件

> 包裹子组件，为其添加 loading 效果。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Spin, Empty } from 'moon-ui';

const SpinDemo: FC = (): ReactElement => {
  return (
    <Spin loading>
      <Empty />
    </Spin>
  );
};

export default SpinDemo;
```

## 加载受控

> 加载中状态变成受控。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Spin, Empty, Button, Divider, Space } from 'moon-ui';

const SpinDemo: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      <Space size="small">
        <Button onClick={() => setLoading(true)}>start loading</Button>
        <Button status="danger" onClick={() => setLoading(false)}>
          stop loading
        </Button>
      </Space>
      <Divider type="horizontal" />
      <Spin loading={loading}>
        <Empty />
      </Spin>
    </Fragment>
  );
};

export default SpinDemo;
```

## 自定义遮罩样式

> maskStyle 属性为 loading mask 自定义样式，或者取消遮罩，display: none。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Spin, Empty } from 'moon-ui';

const SpinDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Spin loading maskStyle={{ opacity: 0.6, backgroundColor: 'orange' }}>
        <Empty />
      </Spin>
    </Fragment>
  );
};

export default SpinDemo;
```

<API></API>
