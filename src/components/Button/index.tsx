import React, { FC, ReactElement } from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
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
  icon,
  iconPosition = 'left',
}: ButtonProps): ReactElement => {
  const classes = classNames(`button-${type}`, 'button-new');

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };

  return (
    <button style={style} className={classes} onClick={handleClick}>
      {icon ? iconPosition === 'left' && icon : loading ? <Loading3QuartersOutlined spin /> : ''}
      {<span className="button-text">{children}</span>}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
