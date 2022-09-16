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

>

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button, Message } from 'moon-ui';

const MessageDemo: FC = (): ReactElement => {
  const showMessage = () => {
    // Message.success({
    //   title: '标题',
    //   content: '内容',
    // })
  };
  return (
    <Fragment>
      <Button onClick={showMessage}></Button>
    </Fragment>
  );
};

export default MessageDemo;
```
