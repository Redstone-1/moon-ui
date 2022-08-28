---
nav:
  title: Components
  path: /components
---

## Button

Demo:

```tsx
import React, { useState } from 'react';
import { Button } from 'moon-ui';
import { CaretRightOutlined } from '@ant-design/icons';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      icon={<CaretRightOutlined />}
      type="primary"
      onClick={() => {
        console.log('!isLoading', !isLoading);
        setIsLoading(!isLoading);
      }}
      loading={isLoading}
    >
      测试
    </Button>
  );
};
```
