---
group:
  title: 基础组件
  path: /components/baseComponents
  order: 0

order: 1
---

# Button 按钮

命令组件，触发一个即时操作。

## 基本使用

> 按钮分为主要按钮、次要按钮、虚线按钮和线形按钮四种，通过 type 属性设置。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button type="primary">primary</Button>
        <Button type="secondary">secondary</Button>
        <Button type="dashed">dashed</Button>
        <Button type="outline">outline</Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 按钮尺寸

> 按钮尺寸通过 size 属性设置，内置了 small，medium，large 三种尺寸。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button size="small" type="primary">
          small
        </Button>
        <Button size="medium" type="primary">
          medium
        </Button>
        <Button size="large" type="primary">
          large
        </Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 按钮形状

> 按钮形状，通过 shape 属性设置，内置了 square(默认)，circle，round 三种形状。circle 时按钮宽高会被限定，这时你可以通过自定义样式覆盖宽高。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button shape="circle" type="primary">
          C
        </Button>
        <Button shape="square" type="primary">
          square
        </Button>
        <Button shape="round" type="primary">
          round
        </Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 按钮状态

> 按钮状态，通过 status 属性设置，内置了 success 成功态(默认)，danger 危险态，warning 警告态三种形状。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button status="success" type="primary">
          success
        </Button>
        <Button status="danger" type="primary">
          danger
        </Button>
        <Button status="warning" type="primary">
          warning
        </Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

> 不同 type 设置不同 status 有不同效果。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <div style={{ margin: '10px' }}>
        <Space size="small">
          <Button status="success" type="primary">
            success
          </Button>
          <Button status="danger" type="primary">
            danger
          </Button>
          <Button status="warning" type="primary">
            warning
          </Button>
        </Space>
      </div>

      <div style={{ margin: '10px' }}>
        <Space size="small">
          <Button status="success" type="secondary">
            success
          </Button>
          <Button status="danger" type="secondary">
            danger
          </Button>
          <Button status="warning" type="secondary">
            warning
          </Button>
        </Space>
      </div>

      <div style={{ margin: '10px' }}>
        <Space size="small">
          <Button status="success" type="dashed">
            success
          </Button>
          <Button status="danger" type="dashed">
            danger
          </Button>
          <Button status="warning" type="dashed">
            warning
          </Button>
        </Space>
      </div>

      <div style={{ margin: '10px' }}>
        <Space size="small">
          <Button status="success" type="outline">
            success
          </Button>
          <Button status="danger" type="outline">
            danger
          </Button>
          <Button status="warning" type="outline">
            warning
          </Button>
        </Space>
      </div>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 按钮禁用

> 禁用后样式统一置灰，不可点击。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button disabled type="primary">
          success
        </Button>
        <Button disabled type="secondary">
          danger
        </Button>
        <Button disabled type="outline">
          warning
        </Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 加载状态

> 给按钮设置 loading。

```tsx
import React, { FC, ReactElement, Fragment, useState } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [isSecondLoading, setIsSecondLoading] = useState(false);
  const [isThirdLoading, setIsThirdLoading] = useState(false);

  const setButtonLoading = (index: string) => {
    const clickMap = {
      1: (): viod => {
        setIsFirstLoading(true);
        setTimeout(() => {
          setIsFirstLoading(false);
        }, 2000);
      },
      2: (): viod => {
        setIsSecondLoading(true);
        setTimeout(() => {
          setIsSecondLoading(false);
        }, 2000);
      },
      3: (): viod => {
        setIsThirdLoading(true);
        setTimeout(() => {
          setIsThirdLoading(false);
        }, 2000);
      },
    };

    clickMap[index]();
  };
  return (
    <Fragment>
      <Space size="small">
        <Button loading={isFirstLoading} onClick={() => setButtonLoading('1')} type="primary">
          primary
        </Button>
        <Button loading={isSecondLoading} onClick={() => setButtonLoading('2')} type="secondary">
          secondary
        </Button>
        <Button loading={isThirdLoading} onClick={() => setButtonLoading('3')} type="outline">
          outline
        </Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 按钮图标

> 给按钮增加图标，可以设置在左侧或右侧，默认左侧。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';
import { DeleteFilled, CheckCircleFilled, PlusSquareFilled } from '@ant-design/icons';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size="small">
        <Button icon={<DeleteFilled />} type="primary">
          primary
        </Button>
        <Button icon={<CheckCircleFilled />} iconPosition="right" type="secondary">
          secondary
        </Button>
        <Button icon={<PlusSquareFilled />} iconPosition="right" type="secondary"></Button>
      </Space>
    </Fragment>
  );
};

export default ButtonDemo;
```

## 按钮组

> 按钮组合，用于多个按钮集中使用的场景，针对 round 做了特别样式。按钮组不适合设置 shape = circle。ButtonGroup 接受自定义 style 和 className。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonGroup = Button.Group;

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button type="primary">primary</Button>
        <Button type="primary">primary</Button>
        <Button type="primary">primary</Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button type="secondary">primary</Button>
        <Button type="secondary">primary</Button>
        <Button type="secondary">primary</Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button type="dashed">primary</Button>
        <Button type="dashed">primary</Button>
        <Button type="dashed">primary</Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button type="outline">primary</Button>
        <Button type="outline">primary</Button>
        <Button type="outline">primary</Button>
      </ButtonGroup>
    </Fragment>
  );
};

export default ButtonDemo;
```

> 设置 shape 为 round。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonGroup = Button.Group;

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" status="success">
          primary
        </Button>
        <Button shape="round" status="danger">
          primary
        </Button>
        <Button shape="round" status="warning">
          primary
        </Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" type="secondary" status="success">
          primary
        </Button>
        <Button shape="round" type="secondary" status="danger">
          primary
        </Button>
        <Button shape="round" type="secondary" status="warning">
          primary
        </Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" type="dashed" status="success">
          primary
        </Button>
        <Button shape="round" type="dashed" status="danger">
          primary
        </Button>
        <Button shape="round" type="dashed" status="warning">
          primary
        </Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" type="outline" status="success">
          primary
        </Button>
        <Button shape="round" type="outline" status="danger">
          primary
        </Button>
        <Button shape="round" type="outline" status="warning">
          primary
        </Button>
      </ButtonGroup>
    </Fragment>
  );
};

export default ButtonDemo;
```

> 设置 shape 为 round，同时可以给按钮组一个统一尺寸，不同的组不同尺寸。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Button } from 'moon-ui';

const ButtonGroup = Button.Group;

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" size="small" status="success">
          success
        </Button>
        <Button shape="round" size="small" status="danger">
          danger
        </Button>
        <Button shape="round" size="small" status="warning">
          warning
        </Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" size="medium" status="success">
          success
        </Button>
        <Button shape="round" size="medium" status="danger">
          danger
        </Button>
        <Button shape="round" size="medium" status="warning">
          warning
        </Button>
      </ButtonGroup>

      <ButtonGroup style={{ display: 'block', margin: '10px' }}>
        <Button shape="round" size="large" status="success">
          success
        </Button>
        <Button shape="round" size="large" status="danger">
          danger
        </Button>
        <Button shape="round" size="large" status="warning">
          warning
        </Button>
      </ButtonGroup>
    </Fragment>
  );
};

export default ButtonDemo;
```

<API></API>
