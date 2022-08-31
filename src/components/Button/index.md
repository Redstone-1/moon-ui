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

const ButtonGroup = Button.Group;

export default () => {
  const [isLoading, setIsLoading] = useState(false);
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
};
```
