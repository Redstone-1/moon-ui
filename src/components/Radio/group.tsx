import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import Radio from './index';
import Space from '../Space';
import Button from '../Button';
import { RadioGroupProps, StringNumber, OptionObject } from './interface';
import { isArray, isNumber, isString } from '../../utils/is';
import classNames from 'classnames';
import './index.less';

const RadioGroup: FC<RadioGroupProps> = ({
  style,
  className,
  type,
  buttonSize = 'small',
  buttonBgColor = '#fff',
  buttonActiveColor = '#f2f3f5',
  disabled,
  direction = 'horizontal',
  options,
  value,
  onChange,
}): ReactElement => {
  const [checkedValue, setCheckedValue] = useState<StringNumber>('');
  const [newOptions, setNewOptions] = useState<OptionObject[]>([]);
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  useEffect(() => {
    if (value && (isNumber(value) || isString(value))) {
      setCheckedValue(value);
    }
  }, [value]);

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
    (item: OptionObject, checked: any, e: Event | null) => {
      if (checked) {
        setCheckedValue(item.value);
        onChange && onChange(item.value as any, e as Event);
      }
    },
    [checkedValue, onChange],
  );

  const buttonClick = (item: OptionObject, index: number) => {
    setButtonIndex(index);
    onCheckChange(item, true, null);
  };

  if (type === 'button') {
    return (
      <span className="button-radio">
        <Space size={[4, 0]}>
          {isArray(options)
            ? newOptions?.map((item, index) => {
                return (
                  <Button
                    key={index}
                    size={buttonSize}
                    style={{
                      backgroundColor: index === buttonIndex ? buttonBgColor : buttonActiveColor,
                      color: '#4e5976',
                    }}
                    onClick={() => buttonClick(item, index)}
                  >
                    {item?.label}
                  </Button>
                );
              })
            : ''}
        </Space>
      </span>
    );
  }
  return (
    <span className={classes} style={style}>
      {isArray(options)
        ? newOptions?.map((item) => {
            return (
              <Radio
                key={item?.value}
                value={item?.value}
                checked={checkedValue === item.value}
                disabled={item?.disabled as any}
                onChange={(checked, e) => onCheckChange(item, checked, e)}
              >
                {item?.label}
              </Radio>
            );
          })
        : ''}
    </span>
  );
};

export default RadioGroup;
