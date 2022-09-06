import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import Checkbox from './index';
import { CheckboxGroupProps, StringNumber } from './interface';
import { isArray, isObject } from '../../utils';
import classNames from 'classnames';
import './index.less';

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  style,
  className,
  disabled,
  direction,
  options,
  value,
  onChange,
  children,
}): ReactElement => {
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    if (value && isArray(value)) {
      setCheckedValues(value as any);
    }
  }, [value]);

  const classes = classNames(className);

  const onCheckChange = useCallback(
    (item: { value: StringNumber | ConcatArray<never> }, checked: any, e: Event) => {
      console.log('value>>>>>', value);
      console.log('checkedValues>>>>>', checkedValues);
      console.log('checked>>>>>', checked);
      if (checked) {
        setCheckedValues(checkedValues.concat(item.value as any));
      } else {
        const newCheckedValues = checkedValues.filter((item) => item !== item?.value);
        setCheckedValues(newCheckedValues);
      }
      onChange && onChange(checkedValues as any, e);
    },
    [value, onChange],
  );

  return (
    <span className={classes} style={style}>
      {isArray(options)
        ? options?.map((item) => {
            return (
              <Checkbox
                key={item?.value}
                value={item?.value}
                checked={checkedValues?.includes(item.value)}
                disabled={item?.disabled}
                onChange={(checked, e) => onCheckChange(item, checked, e)}
              >
                {item?.label}
              </Checkbox>
            );
          })
        : { children }}
    </span>
  );
};

export default CheckboxGroup;
