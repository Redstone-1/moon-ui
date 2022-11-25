import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import Checkbox from './index';
import { CheckboxGroupProps, StringNumber, OptionObject } from './interface';
import { isArray } from '../../utils/is';
import classNames from 'classnames';
import './index.less';

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  style,
  className,
  disabled,
  direction = 'horizontal',
  options,
  values,
  onChange,
}): ReactElement => {
  const [checkedValues, setCheckedValues] = useState<StringNumber[]>([]);
  const [newOptions, setNewOptions] = useState<OptionObject[]>([]);

  useEffect(() => {
    if (values && isArray(values)) {
      setCheckedValues(values);
    }
  }, [values]);

  useEffect(() => {
    if (options && isArray(options)) {
      if (disabled) {
        const newOptions = cloneDeep(options) as [];
        newOptions.forEach((option: OptionObject) => (option.disabled = true));
        setNewOptions(newOptions);
        return;
      }
      setNewOptions(options);
    }
  }, [options]);

  const classes = classNames({ [`${direction}`]: direction }, className);

  const onCheckChange = useCallback(
    (item: { value: StringNumber | ConcatArray<never> }, checked: any, e: Event) => {
      let newCheckedValues = [];
      if (checked) {
        newCheckedValues = checkedValues.concat(item.value);
        setCheckedValues(newCheckedValues);
      } else {
        newCheckedValues = checkedValues.filter((value) => value !== item?.value);
        setCheckedValues(newCheckedValues);
      }
      onChange && onChange(newCheckedValues as any, e);
    },
    [checkedValues, onChange],
  );

  return (
    <span className={classes} style={style}>
      {isArray(options)
        ? newOptions?.map((item) => {
            return (
              <Checkbox
                key={item?.value}
                value={item?.value}
                checked={checkedValues?.includes(item.value)}
                disabled={item?.disabled as any}
                onChange={(checked, e) => onCheckChange(item, checked, e)}
              >
                {item?.label}
              </Checkbox>
            );
          })
        : ''}
    </span>
  );
};

export default CheckboxGroup;
