import React, { FC, ReactElement } from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import { ButtonProps } from './interface';
import classNames from 'classnames';
import Group from './group';
import './index.less';

const Button: FC<ButtonProps> & { Group: typeof Group } = ({
  style,
  className,
  children,
  type = 'primary',
  shape = 'square',
  size = 'medium',
  status,
  loading,
  icon,
  iconPosition = 'left',
  disabled = false,
  htmlType = 'button',
  onClick,
}): ReactElement => {
  const classes = classNames(
    'button',
    `button-${type}`,
    `button-${size}`,
    {
      [`button-${size}-${shape}`]: shape,
      [`button-${type}-${status}`]: status,
      ['button-disabled']: disabled,
    },
    className,
  );

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && !disabled && onClick(event);
  };

  return (
    <button style={style} className={classes} onClick={handleClick} type={htmlType}>
      {icon ? iconPosition === 'left' && icon : loading ? <Loading3QuartersOutlined spin /> : ''}
      {children && <span className="button-text">{children}</span>}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
Button.Group = Group;
