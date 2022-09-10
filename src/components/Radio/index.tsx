import React, {
  FC,
  ReactElement,
  useCallback,
  useState,
  useEffect,
  BaseSyntheticEvent,
  ChangeEventHandler,
} from 'react';
import { RadioProps } from './interface';
import Group from './group';
import classNames from 'classnames';
import './index.less';

const Radio: FC<RadioProps> & { Group: typeof Group } = ({
  style,
  className,
  checked,
  disabled = false,
  value,
  onChange,
  children,
}): ReactElement => {
  const [innerChecked, setInnerChecked] = useState(false);

  useEffect(() => {
    if (checked !== undefined) {
      setInnerChecked(checked);
    }
  }, [checked]);

  const onCheckChange = useCallback(
    (e: BaseSyntheticEvent & Event) => {
      e.persist();
      e.stopPropagation();
      if (typeof onChange === 'function') {
        onChange(e.target.checked, e);
      }
      setInnerChecked(!innerChecked);
    },
    [innerChecked, onChange],
  );

  const classes = classNames('radio', {
    ['checked']: checked,
    ['disabled']: disabled,
    className,
  });

  return (
    <label
      className={classes}
      style={{ cursor: disabled ? '' : 'pointer', ...style, margin: '0 4px 0 4px' }}
    >
      <span className="radio-wrapper">
        <input
          value={value}
          disabled={disabled}
          checked={innerChecked}
          onChange={onCheckChange as ChangeEventHandler<HTMLInputElement>}
          onClick={(e) => e.stopPropagation()}
          type="radio"
        />
      </span>
      <span className="radio-text">{children}</span>
    </label>
  );
};

export default Radio;
Radio.Group = Group;
