---
group:
  title: 反馈组件
  path: /components/feedbackComponents
  order: 1

order: 4
---

# Message 全局提示

由用户的操作触发的轻量级全局反馈。

## 基本使用

> 直接使用函数加载提示，简洁高效。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button status="success" onClick={() => Message.success({ content: '成功提示' })}>
          成功提示
        </Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

## 提示类型

> 不同的提示类型，使用不同的函数触发。分别是 success | warning | danger | info | loading。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button status="success" onClick={() => Message.success({ content: '成功提示' })}>
          成功提示
        </Button>
        <Button status="warning" onClick={() => Message.warning({ content: '警告提示' })}>
          警告提示
        </Button>
        <Button status="danger" onClick={() => Message.danger({ content: '危险提示' })}>
          危险提示
        </Button>
        <Button type="secondary" onClick={() => Message.info({ content: '信息提示' })}>
          信息提示
        </Button>
        <Button onClick={() => Message.loading({ content: '加载中提示' })}>加载中提示</Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

## 设置尺寸

> 给提示设置不同尺寸，size = small | medium | large。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button
          status="success"
          onClick={() => Message.success({ content: 'small', size: 'small' })}
        >
          small
        </Button>
        <Button
          status="success"
          onClick={() => Message.success({ content: 'medium', size: 'medium' })}
        >
          medium
        </Button>
        <Button
          status="success"
          onClick={() => Message.success({ content: 'large', size: 'large' })}
        >
          large
        </Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

## 延迟触发

> 给提示设置 delay 属性可以延迟触发。延迟触发的消息同时间只能存在一个节点，在持续时间内，多次触发也只生成一个。当然，你可以使用 setInterval 循环触发。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button
          status="warning"
          onClick={() => Message.warning({ content: '延迟2秒', delay: 2000 })}
        >
          延迟2秒
        </Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

## 持续时间

> 设置 duration 可以让消息持续任意时长。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button
          status="danger"
          onClick={() => Message.danger({ content: '持续5秒', duration: 5000 })}
        >
          持续5秒
        </Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

## 消息位置

> 设置 position，让 Message 在不同位置出现。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button onClick={() => Message.warning({ content: 'left 左侧', position: 'left' })}>
          left
        </Button>
        <Button onClick={() => Message.warning({ content: 'center 中心', position: 'center' })}>
          center
        </Button>
        <Button onClick={() => Message.warning({ content: 'right 右侧', position: 'right' })}>
          right
        </Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

## 设置图标

> 控制图标显隐或自定义图标。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';
import { WifiOutlined } from '@ant-design/icons';

const MessageDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button
          status="success"
          onClick={() => Message.success({ content: '隐藏图标', showIcon: false })}
        >
          隐藏图标
        </Button>
        <Button
          status="success"
          onClick={() => Message.success({ content: '自定义图标', icon: <WifiOutlined /> })}
        >
          自定义图标
        </Button>
      </Space>
    </Fragment>
  );
};

export default MessageDemo;
```

<API></API>
