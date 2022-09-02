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

> 按钮分为主要按钮、次要按钮、虚线按钮和线形按钮四种。

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Button } from 'moon-ui';

const ButtonDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Button type="primary">主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <Button type="outline">线形按钮</Button>
    </Fragment>
  );
};

export default ButtonDemo;
```

<!-- import React, { Fragment, FC, ReactElement,  } from 'react';
import { Button } from 'moon-ui';
import { CaretRightOutlined } from '@ant-design/icons';

const ButtonGroup = Button.Group

export default () => {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>
      <Button type="secondary" loading={isLoading}>
        测试
      </Button>
      <Button type="dashed" loading={isLoading}>
        测试
      </Button>
      <Button type="outline" loading={isLoading}>
        测试
      </Button>

      <Button
        size="small"
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>
      <Button
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>
      <Button
        size="large"
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        size="small"
        type="primary"
        shape="circle"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测
      </Button>

      <Button
        type="primary"
        shape="circle"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测
      </Button>

      <Button
        size="large"
        type="primary"
        shape="circle"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        size="small"
        type="primary"
        shape="round"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        type="primary"
        shape="round"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        size="large"
        type="primary"
        shape="round"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="success"
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="danger"
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="warning"
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="success"
        type="secondary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="danger"
        type="secondary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="warning"
        type="secondary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="success"
        type="dashed"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="danger"
        type="dashed"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="warning"
        type="dashed"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="success"
        type="outline"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="danger"
        type="outline"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        status="warning"
        type="outline"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        disabled
        type="primary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <Button
        disabled
        type="secondary"
        onClick={() => {
          console.log('!isLoading', !isLoading);
          setIsLoading(!isLoading);
        }}
      >
        测试
      </Button>

      <ButtonGroup>
        <Button type="primary">按钮组合</Button>
        <Button type="primary">按钮组合</Button>
        <Button type="primary">按钮组合</Button>
        <Button type="primary">按钮组合</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="secondary">按钮组合</Button>
        <Button type="secondary">按钮组合</Button>
        <Button type="secondary">按钮组合</Button>
        <Button type="secondary">按钮组合</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="dashed">按钮组合</Button>
        <Button type="dashed">按钮组合</Button>
        <Button type="dashed">按钮组合</Button>
        <Button type="dashed">按钮组合</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type="primary" size="small" shape="round">
          按钮组合
        </Button>
        <Button type="primary" size="small" shape="round">
          按钮组合
        </Button>
        <Button type="primary" size="small" shape="round">
          按钮组合
        </Button>
        <Button type="primary" size="small" shape="round">
          按钮组合
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type="secondary" shape="round">
          按钮组合
        </Button>
        <Button type="secondary" shape="round">
          按钮组合
        </Button>
        <Button type="secondary" shape="round">
          按钮组合
        </Button>
        <Button type="secondary" shape="round">
          按钮组合
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type="outline" size="small" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="small" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="small" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="small" shape="round">
          按钮组合
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type="outline" size="medium" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="medium" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="medium" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="medium" shape="round">
          按钮组合
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type="outline" size="large" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="large" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="large" shape="round">
          按钮组合
        </Button>
        <Button type="outline" size="large" shape="round">
          按钮组合
        </Button>
      </ButtonGroup>
    </>
  );
}; -->

<API></API>
