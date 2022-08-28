import React, { FC, ReactElement } from 'react';
import { IconLoading } from '@arco-iconbox/react-moon-icons';
import { ButtonProps } from './interface';
import classNames from 'classnames';
import './index.less';

const Button: FC = ({
  style,
  className,
  children,
  type = 'primary',
  onClick,
  loading,
}: ButtonProps): ReactElement => {
  const classes = classNames(`btn-${type}`, className);

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };

  return (
    <button style={style} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
