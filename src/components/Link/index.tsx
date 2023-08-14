import React, { FC, ReactElement } from 'react';
import { LinkOutlined } from '@ant-design/icons';
import { LinkProps } from './interface';
import classNames from 'classnames';
import './index.less';

const Link: FC<LinkProps> = ({
  style,
  className,
  icon = <LinkOutlined />,
  href,
  showIcon = false,
  disabled = false,
  hoverable = true,
  status,
  bottomLine = false,
  children = 'Link',
}): ReactElement => {
  const classes = classNames(
    {
      ['moon-ui-link']: hoverable,
      ['without-hover-color']: !hoverable,
      ['error']: status === 'error',
      ['success']: status === 'success',
      ['warning']: status === 'warning',
      ['disabled']: disabled,
      ['bottom-line']: bottomLine,
    },
    className,
  );
  return (
    <span style={style} className={classes}>
      {showIcon && <span className="link-icon">{icon ? icon : ''}</span>}
      {disabled ? (
        <span className="link-a">{children}</span>
      ) : (
        <a className="link-a" href={href}>
          {children}
        </a>
      )}
    </span>
  );
};

export default Link;
