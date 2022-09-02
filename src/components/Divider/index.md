---
group:
  title: 布局组件
  path: /components/layoutComponents
  order: 0

order: 2
---

# Divider 分割线

布局组件，用于分割组件，可进行纵向、横向分割，并配以文字显示。

## 基本使用

> 横向上，用于区分几个独立的块。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Divider, Button } from 'moon-ui';

const DividerDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Button status="success">按钮1</Button>
      <Divider type="vertical"></Divider>
      <Button status="danger">按钮2</Button>
      <Divider type="vertical"></Divider>
      <Button status="warning">按钮3</Button>
    </Fragment>
  );
};

export default DividerDemo;
```

## 文本段落分割

> 纵向上区分不同的文本块。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Divider, Button } from 'moon-ui';

const DividerDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <p status="success">这是一段文本这是一段文本这是一段文本这是一段文本</p>
      <Divider type="horizontal"></Divider>
      <p status="danger">这是一段文本这是一段文本这是一段文本这是一段文本</p>
      <Divider type="horizontal"></Divider>
      <p status="warning">这是一段文本这是一段文本这是一段文本这是一段文本</p>
    </Fragment>
  );
};

export default DividerDemo;
```

## 分割线携带文字

> 只针对 type = horizontal 时有效，可以设置辅助文本的位置。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Divider, Button } from 'moon-ui';

const DividerDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <p status="success">这是一段文本这是一段文本这是一段文本这是一段文本</p>
      <Divider type="horizontal" orientation="left">
        文本居左
      </Divider>
      <p status="danger">这是一段文本这是一段文本这是一段文本这是一段文本</p>
      <Divider type="horizontal" orientation="center">
        文本居中
      </Divider>
      <p status="warning">这是一段文本这是一段文本这是一段文本这是一段文本</p>
      <Divider type="horizontal" orientation="right">
        文本居右
      </Divider>
      <p status="warning">这是一段文本这是一段文本这是一段文本这是一段文本</p>
    </Fragment>
  );
};

export default DividerDemo;
```

<API></API>
