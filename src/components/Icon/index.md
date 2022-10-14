# Icon 图标

语义化的矢量图形。使用图标组件，你需要安装 @ant-design/icons 图标组件包：

```js
npm install --save @ant-design/icons
```

本文档仅展示部分图标，更多图标及使用方法，请访问 [ant-design 官网](https://ant.design/components/icon-cn)。

## 线框图标

### 提示性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  QuestionOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
  MinusOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  WarningOutlined,
  StopOutlined,
  InfoOutlined,
  ExclamationOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <QuestionOutlined />,
  <QuestionCircleOutlined />,
  <PlusOutlined />,
  <MinusOutlined />,
  <PlusSquareOutlined />,
  <MinusSquareOutlined />,
  <InfoCircleOutlined />,
  <ExclamationCircleOutlined />,
  <CheckCircleOutlined />,
  <CloseCircleOutlined />,
  <WarningOutlined />,
  <StopOutlined />,
  <InfoOutlined />,
  <ExclamationOutlined />,
  <CheckSquareOutlined />,
  <CloseSquareOutlined />,
  <CloseOutlined />,
  <CheckOutlined />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 方向性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <StepBackwardOutlined />,
  <StepForwardOutlined />,
  <FastBackwardOutlined />,
  <FastForwardOutlined />,
  <ShrinkOutlined />,
  <ArrowsAltOutlined />,
  <DownOutlined />,
  <UpOutlined />,
  <LeftOutlined />,
  <RightOutlined />,
  <CaretUpOutlined />,
  <CaretDownOutlined />,
  <CaretLeftOutlined />,
  <CaretRightOutlined />,
  <UpCircleOutlined />,
  <DownCircleOutlined />,
  <LeftCircleOutlined />,
  <RightCircleOutlined />,
  <ArrowUpOutlined />,
  <ArrowDownOutlined />,
  <ArrowLeftOutlined />,
  <ArrowRightOutlined />,
  <FullscreenOutlined />,
  <FullscreenExitOutlined />,
  <LoginOutlined />,
  <LogoutOutlined />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 编辑性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  EditOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  RedoOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <EditOutlined />,
  <FormOutlined />,
  <CopyOutlined />,
  <ScissorOutlined />,
  <DeleteOutlined />,
  <AlignCenterOutlined />,
  <AlignLeftOutlined />,
  <AlignRightOutlined />,
  <RedoOutlined />,
  <UndoOutlined />,
  <ZoomInOutlined />,
  <ZoomOutOutlined />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 数据性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BoxPlotOutlined,
  FundOutlined,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <AreaChartOutlined />,
  <PieChartOutlined />,
  <BarChartOutlined />,
  <DotChartOutlined />,
  <LineChartOutlined />,
  <RadarChartOutlined />,
  <HeatMapOutlined />,
  <FallOutlined />,
  <RiseOutlined />,
  <StockOutlined />,
  <BoxPlotOutlined />,
  <FundOutlined />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

## 实底风格

### 提示性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  QuestionCircleFilled,
  PlusCircleFilled,
  PauseCircleFilled,
  MinusCircleFilled,
  PlusSquareFilled,
  MinusSquareFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseSquareFilled,
  CheckCircleFilled,
  CheckSquareFilled,
  ClockCircleFilled,
  WarningFilled,
  StopFilled,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <QuestionCircleFilled />,
  <PlusCircleFilled />,
  <PauseCircleFilled />,
  <MinusCircleFilled />,
  <PlusSquareFilled />,
  <MinusSquareFilled />,
  <InfoCircleFilled />,
  <ExclamationCircleFilled />,
  <CloseCircleFilled />,
  <CloseSquareFilled />,
  <CheckCircleFilled />,
  <CheckSquareFilled />,
  <ClockCircleFilled />,
  <WarningFilled />,
  <StopFilled />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 方向性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  StepBackwardFilled,
  StepForwardFilled,
  FastBackwardFilled,
  FastForwardFilled,
  CaretUpFilled,
  CaretDownFilled,
  CaretLeftFilled,
  CaretRightFilled,
  UpCircleFilled,
  DownCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  ForwardFilled,
  BackwardFilled,
  PlayCircleFilled,
  UpSquareFilled,
  DownSquareFilled,
  LeftSquareFilled,
  RightSquareFilled,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <StepBackwardFilled />,
  <StepForwardFilled />,
  <FastBackwardFilled />,
  <FastForwardFilled />,
  <CaretUpFilled />,
  <CaretDownFilled />,
  <CaretLeftFilled />,
  <CaretRightFilled />,
  <UpCircleFilled />,
  <DownCircleFilled />,
  <LeftCircleFilled />,
  <RightCircleFilled />,
  <ForwardFilled />,
  <BackwardFilled />,
  <PlayCircleFilled />,
  <UpSquareFilled />,
  <DownSquareFilled />,
  <LeftSquareFilled />,
  <RightSquareFilled />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 编辑性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  EditFilled,
  CopyFilled,
  DeleteFilled,
  SnippetsFilled,
  DiffFilled,
  HighlightFilled,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <EditFilled />,
  <CopyFilled />,
  <DeleteFilled />,
  <SnippetsFilled />,
  <DiffFilled />,
  <HighlightFilled />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 数据性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import { PieChartFilled, BoxPlotFilled, FundFilled, SlidersFilled } from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [<PieChartFilled />, <BoxPlotFilled />, <FundFilled />, <SlidersFilled />];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

## 双色图标

### 提示性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  QuestionCircleTwoTone,
  PlusCircleTwoTone,
  PauseCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <QuestionCircleTwoTone />,
  <PlusCircleTwoTone />,
  <PauseCircleTwoTone />,
  <MinusCircleTwoTone />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 方向性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  UpCircleTwoTone,
  DownCircleTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PlayCircleTwoTone,
  UpSquareTwoTone,
  DownSquareTwoTone,
  LeftSquareTwoTone,
  RightSquareTwoTone,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <UpCircleTwoTone />,
  <DownCircleTwoTone />,
  <LeftCircleTwoTone />,
  <RightCircleTwoTone />,
  <PlayCircleTwoTone />,
  <UpSquareTwoTone />,
  <DownSquareTwoTone />,
  <LeftSquareTwoTone />,
  <RightSquareTwoTone />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 编辑性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import {
  EditTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  SnippetsTwoTone,
  DiffTwoTone,
  HighlightTwoTone,
} from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [
  <EditTwoTone />,
  <CopyTwoTone />,
  <DeleteTwoTone />,
  <SnippetsTwoTone />,
  <DiffTwoTone />,
  <HighlightTwoTone />,
];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

### 数据性图标

```tsx
import React, { FC, ReactElement, Fragment } from 'react';
import { Space, Icon } from 'moon-ui';
import { PieChartTwoTone, BoxPlotTwoTone, FundTwoTone, SlidersTwoTone } from '@ant-design/icons';

const { IconBox } = Icon;

const iconList = [<PieChartTwoTone />, <BoxPlotTwoTone />, <FundTwoTone />, <SlidersTwoTone />];

const IconDemo: FC = (): ReactElement => {
  return (
    <Fragment>
      <Space size={[4, 4]} aroundWrap>
        {iconList.map((item, index) => (
          <IconBox key={index} icon={item} />
        ))}
      </Space>
    </Fragment>
  );
};

export default IconDemo;
```

<API></API>
