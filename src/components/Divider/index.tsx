import React, { FC, ReactElement } from 'react';
import { DividerProps } from './interface';
import classNames from 'classnames';
import './index.less';

const Divider: FC<DividerProps> = ({
  style,
  className,
  children,
  type = 'vertical',
  orientation = 'center',
  margin = 10,
  size = 1,
  color,
}): ReactElement => {
  const classes = classNames(
    `divider-${type}`,
    {
      [`divider-with-text`]: children,
      [`divider-with-text-${orientation}`]: children && orientation,
    },
    className,
  );

  return (
    <div
      className={classes}
      style={{
        marginLeft: type === 'vertical' ? `${margin}px` : '',
        marginTop: type === 'horizontal' ? `${margin}px` : '',
        marginBottom: type === 'horizontal' ? `${margin}px` : '',
        marginRight: type === 'vertical' ? `${margin}px` : '',
        borderWidth: `${size}`,
        borderColor: `${color}`,
        ...style,
      }}
    >
      {children && type === 'horizontal' ? (
        <span className={`divider-text divider-text-${orientation}`}>{children}</span>
      ) : null}
    </div>
  );
};

export default Divider;
