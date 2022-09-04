import React, {
  FC,
  ReactElement,
  Fragment,
  useCallback,
  useState,
  useEffect,
  BaseSyntheticEvent,
  ChangeEventHandler,
} from 'react';
import { CheckboxProps } from './interface';
import classNames from 'classnames';
import './index.less';

const Checkbox: FC<CheckboxProps> = ({
  style,
  className,
  checked,
  disabled = false,
  halfChecked = false,
  value,
  onChange,
  children,
}): ReactElement => {
  const [innerChecked, setInnerChecked] = useState(false);

  useEffect(() => {
    if (checked !== undefined && !halfChecked) {
      setInnerChecked(checked);
    }
  }, [checked]);

  const onCheckChange = useCallback(
    (e: BaseSyntheticEvent & Event) => {
      e.persist();
      e.stopPropagation();
      if (typeof onChange === 'function') {
        onChange(e.target.checked, e);
        setInnerChecked(!innerChecked);
      }
    },
    [value, innerChecked, checked, onChange],
  );

  const classes = classNames('checkbox', {
    ['checked']: checked,
    ['half-checked']: halfChecked,
    ['disabled']: disabled,
  });

  return (
    <label
      className={classes}
      // onClick={}
      style={{ cursor: disabled ? '' : 'pointer', ...style }}
    >
      <span className="checkbox-wrapper">
        <input
          value={value}
          disabled={disabled}
          checked={innerChecked}
          onChange={onCheckChange as ChangeEventHandler<HTMLInputElement>}
          onClick={(e) => e.stopPropagation()}
          type="checkbox"
        />
      </span>
      <span className="checkbox-text">{children}</span>
    </label>
  );
};

export default Checkbox;
