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
    <div className={classes} style={style}>
      {children && type === 'horizontal' ? (
        <span className={`divider-text divider-text-${orientation}`}>{children}</span>
      ) : null}
    </div>
  );
};

export default Divider;
