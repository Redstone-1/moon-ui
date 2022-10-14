# Link 链接

基于 a 标签的一个简单链接组件。

## 基本使用

> 与按钮相比，链接不太突出，因此通常将其用作可选操作。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Link } from 'moon-ui';

const LinkDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space>
        <Link href="#">Link</Link>
      </Space>
    </Fragment>
  );
};

export default LinkDemo;
```

## 不同状态

> 使用 status 为 Link 赋予不同状态。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Link } from 'moon-ui';

const LinkDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Link href="#" status="error">
          Link
        </Link>
        <Link href="#" status="success">
          Link
        </Link>
        <Link href="#" status="warning">
          Link
        </Link>
      </Space>
    </Fragment>
  );
};

export default LinkDemo;
```

## 控制图标

> showIcon 控制是否显示图标，icon 传入自定义图标。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Link } from 'moon-ui';
import { SendOutlined } from '@ant-design/icons';

const LinkDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Link href="#" showIcon>
          Link
        </Link>
        <Link href="#" showIcon icon={<SendOutlined />}>
          Link
        </Link>
      </Space>
    </Fragment>
  );
};

export default LinkDemo;
```

## 不显示底色

> hoverable 控制是否显示 hover 时的底色。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Link } from 'moon-ui';

const LinkDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Link href="#" hoverable={false}>
          Link
        </Link>
      </Space>
    </Fragment>
  );
};

export default LinkDemo;
```

## 禁用

> 使用 disabled 禁用 Link。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Link } from 'moon-ui';

const LinkDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Link href="#" disabled>
          Link
        </Link>
      </Space>
    </Fragment>
  );
};

export default LinkDemo;
```

<API></API>
