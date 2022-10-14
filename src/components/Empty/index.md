# Empty 空状态

指当前场景没有对应的数据内容，呈现出的一种状态。

## 基本使用

> Empty 空状态组件的基础用法。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Empty } from 'moon-ui';

const EmptyDemo: FC = (): ReactElement => {
  return <Empty />;
};

export default EmptyDemo;
```

## 自定义图标和文案

> 可以通过 icon 参数传入自定义图标，description 修改显示文案。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { GiftFilled } from '@ant-design/icons';
import { Empty } from 'moon-ui';

const EmptyDemo: FC = (): ReactElement => {
  return <Empty icon={<GiftFilled style={{ fontSize: '42px' }} />} description="这里是空的" />;
};

export default EmptyDemo;
```

## 自定义显示图片

> 可以通过 imgSrc 修改图标显示为自定义图片。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Empty } from 'moon-ui';

const EmptyDemo: FC = (): ReactElement => {
  return (
    <Empty imgSrc="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a0082b7754fbdb2d98a5c18d0b0edd25.png~tplv-uwbnlip3yd-webp.webp" />
  );
};

export default EmptyDemo;
```

<API></API>
