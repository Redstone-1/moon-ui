import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { EmptyProps } from './interface';
import './index.less';

const Empty: FC<EmptyProps> = ({
  style,
  className,
  icon,
  imgSrc,
  description = '暂无数据',
}): ReactElement => {
  const defaultIcon = () => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className="empty-default-icon"
    >
      <path d="M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"></path>
    </svg>
  );

  const classes = classNames(`moon-ui-empty`, className);

  return (
    <div style={style} className={classes}>
      {imgSrc ? (
        <img alt="Empty 图片" src={imgSrc} />
      ) : (
        <p style={{ margin: '5px 0' }} className="empty-icon">
          {icon ? icon : defaultIcon()}
        </p>
      )}
      <p style={{ margin: '5px 0' }} className="empty-description">
        {description ? description : '暂无数据'}
      </p>
    </div>
  );
};

export default Empty;
