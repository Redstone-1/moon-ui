---
group:
  title: 反馈组件
  path: /components/feedbackComponents
  order: 1

order: 1
---

# Result 结果页

用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## Success

> 展示成功状态。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="success" title="this is success status" />;
};

export default ResultDemo;
```

## Info

> 展示信息状态。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="info" title="this is info status" />;
};

export default ResultDemo;
```

## Warning

> 展示警示状态。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="warning" title="this is warning status" />;
};

export default ResultDemo;
```

## Error

> 展示错误状态。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="error" title="this is error status" />;
};

export default ResultDemo;
```

## 403 Page

> 展示 403。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="status403" title="this is 403 page" />;
};

export default ResultDemo;
```

## 404 Page

> 展示 404。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="status404" title="this is 404 page" />;
};

export default ResultDemo;
```

## 500 Page

> 展示 500。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="status500" title="this is 500 page" />;
};

export default ResultDemo;
```

## Subtitle

> 展示次标题。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Result } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return <Result status="success" title="main title" subTitle="this is subTitle" />;
};

export default ResultDemo;
```

## Extra

> 额外的内容。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Result, Button } from 'moon-ui';

const ResultDemo: FC = (): ReactElement => {
  return (
    <Result
      status="success"
      title="this is success page"
      subTitle="this is subTitle"
      extra={
        <Space size="small">
          <Button type="secondary">Again</Button>
          <Button>Back</Button>
        </Space>
      }
    />
  );
};

export default ResultDemo;
```

<API></API>
