import React, { FC, ReactElement, Fragment } from 'react';
import { SpaceProps, SpaceSize } from './interface';
import { isArray, isNumber } from '../../utils/is';
import classNames from 'classnames';
import './index.less';

const Space: FC<SpaceProps> = ({
  style,
  className,
  direction = 'horizontal',
  size = 'small',
  aroundWrap = false,
  split,
  children,
}): ReactElement => {
  // 整体思路就是给每个子元素包括一层容器，通过处理外层容器间距来实现 space

  // 首先将子元素转换为数组
  const childrenList = React.Children.toArray(children);

  // 写着发现边距还存在环绕的情况，这里写个公共方法
  const calcMargin = (marginSize: SpaceSize) => {
    if (isNumber(marginSize)) {
      return marginSize;
    }
    switch (marginSize) {
      case 'small':
        return 8;
      case 'medium':
        return 16;
      case 'large':
        return 24;
      default:
        return 8;
    }
  };

  const getMarginStyle = (index: number) => {
    const isLastOne = childrenList.length === index + 1;
    if (typeof size === 'string' || typeof size === 'number') {
      const margin = calcMargin(size as SpaceSize);
      if (aroundWrap) {
        return {
          margin: `${margin}px`,
        };
      }
      if (direction === 'horizontal') {
        return { marginRight: `${margin}px` };
      } else {
        return {
          marginBottom: isLastOne ? '' : `${margin}px`,
        };
      }
    }

    if (isArray(size)) {
      const size0 = size[0] || 0;
      const size1 = size[1] || 0;
      if (direction === 'horizontal') {
        if (aroundWrap) {
          return {
            margin: `${size0}px ${size1}px `,
          };
        }
        return {
          marginRight: isLastOne ? '' : `${size0}px`,
          marginBottom: `${size[1]}px`,
        };
      } else {
        return {
          marginBottom: isLastOne ? '' : `${size1}px`,
        };
      }
    }
  };

  const classes = classNames(
    {
      [`space-${direction}`]: direction,
      [`space-aroundWrap`]: aroundWrap,
    },
    className,
  );

  return (
    <div style={style} className={classes}>
      {childrenList.map((child, index) => {
        return (
          <Fragment key={index}>
            {split && index > 0 && <div>{split}</div>}
            <div style={getMarginStyle(index)}>{child}</div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Space;
