import React, { FC, Fragment, ReactElement } from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { SpinProps } from './interface';
import './index.less';

const Empty: FC<SpinProps> = ({
  style,
  className,
  icon = <Loading3QuartersOutlined spin style={{ fontSize: '28px' }} />,
  tip = '加载中...',
  loading = false,
  children,
  maskStyle,
}): ReactElement => {
  const classes = classNames(`moon-ui-spin-wrapper`, className);

  return (
    <div style={style} className={classes}>
      {loading && (
        <Fragment>
          <div className="spin-mask" style={maskStyle}></div>
          <div className="moon-ui-spin">
            <div className="spin-icon">{icon}</div>
            <p className="spin-text">{tip}</p>
          </div>
        </Fragment>
      )}
      {children ? children : ''}
    </div>
  );
};

export default Empty;
