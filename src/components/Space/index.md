---
group:
  title: 布局组件
  path: /components/layoutComponents
  order: 1

order: 2
---

# Space 间距

布局组件，用于给组件增加间距。

## 基本使用

> 设置间距尺寸，基本分为 small，medium，large 三个尺寸，也可以使用具体的数字，单位默认 px。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const SpaceDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
      </Space>
    </Fragment>
  );
};

export default SpaceDemo;
```

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const SpaceDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="medium">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
      </Space>
    </Fragment>
  );
};

export default SpaceDemo;
```

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const SpaceDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="large">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
      </Space>
    </Fragment>
  );
};

export default SpaceDemo;
```

## 设置方向

> 设置组件的布局方向，默认 horizontal 水平方向。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const SpaceDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small" direction="vertical">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
      </Space>
    </Fragment>
  );
};

export default SpaceDemo;
```

## 环绕间距并换行

> 设置组件四周环绕间距并换行。如果使用 aroundWrap，建议 size 使用数组类型，这样可以精确控制边距一致。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const SpaceDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
      </Space>
    </Fragment>
  );
};

export default SpaceDemo;
```

## 配合分割组件使用

> 设置 split 属性并传入 Divider，使用 Divider 进行组件分割。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button, Divider } from 'moon-ui';

const SpaceDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space split={<Divider type="vertical" />}>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
      </Space>
    </Fragment>
  );
};

export default SpaceDemo;
```

<API></API>
