# VirtualList 虚拟列表

在渲染大量列表项时使用，可以减少性能消耗。

## 基本使用

> 传入要渲染的列表，给定一个基本高度。height、dataSource 两个参数必传。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { VirtualList } from 'moon-ui';

const VirtualListDemo: FC = (): ReactElement => {
  const [dataSource, setDataSource] = useState(
    new Array(1000).fill(0).map((item, index) => {
      return (item = (
        <p style={{ backgroundColor: index % 2 === 0 ? '#3491fa' : '#fff' }}>这是一段文本</p>
      ));
    }),
  );

  return (
    <Fragment>
      <VirtualList height={200} dataSource={dataSource} />
    </Fragment>
  );
};

export default VirtualListDemo;
```

<API></API>
