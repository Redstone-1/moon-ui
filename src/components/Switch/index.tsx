import React, { FC, ReactElement, useState, useEffect } from 'react';
import { SwitchProps } from './interface';
import classNames from 'classnames';
import './index.less';

const Switch: FC<SwitchProps> = ({
  style,
  className,
  value = false,
  activeColor,
  inActiveColor,
  ballColor,
  ballContent,
  size = 'small',
  disabled = false,
  onChange,
}): ReactElement => {
  const [checked, setChecked] = useState(false);
  const color = checked ? activeColor : inActiveColor;

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const classes = classNames(
    `switch`,
    {
      ['small']: size === 'small',
      ['medium']: size === 'medium',
      ['large']: size === 'large',
      ['disabled']: disabled,
    },
    {
      ['checked-small']: checked && size === 'small',
      ['checked-medium']: checked && size === 'medium',
      ['checked-large']: checked && size === 'large',
    },
    className,
  );

  const spanClasses = classNames(`switch-core`, {
    ['small']: size === 'small',
    ['medium']: size === 'medium',
    ['large']: size === 'large',
  });

  const changeSwitch = (e: Event): void => {
    if (!disabled) {
      if (value !== undefined && onChange !== undefined) {
        e.stopPropagation();
        onChange(!checked, e);
      }
      setChecked(!checked);
    }
  };

  return (
    <div className={classes} style={style} onClick={changeSwitch as any}>
      <span
        className={spanClasses}
        style={{
          backgroundColor: color,
          borderColor: color,
        }}
      >
        <span className="switch-btn" style={{ backgroundColor: ballColor ? ballColor : '' }}>
          {ballContent || ''}
        </span>
      </span>
    </div>
  );
};

export default Switch;
