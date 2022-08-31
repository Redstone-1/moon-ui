import React, { FC, ReactElement } from 'react';
import { ButtonGroupProps } from './interface';
import classNames from 'classnames';
import './index.less';

const ButtonGroup: FC = (props: ButtonGroupProps): ReactElement => {
  const { style, className, children } = props;
  const classes = classNames('button-group', className);
  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};

export default ButtonGroup;
