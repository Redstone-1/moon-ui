import React, { FC, ReactElement, useCallback, useState, useEffect } from 'react';
import { MessageProps } from './interface';
import classNames from 'classnames';
import './index.less';

/** message 类型 */
// const messageTypes = ['success', 'warning', 'error', 'notice', 'help', 'loading']

const Message: FC<MessageProps> = ({
  style,
  className,
  title,
  content,
  type,
  size,
  duration,
  closable,
  hasMask,
  onClose,
  afterClose,
}): ReactElement => {
  const [innerChecked, setInnerChecked] = useState(false);

  const classes = classNames('message', {
    className,
  });

  return (
    <div className={classes} style={style}>
      {hasMask && <div className="mask"></div>}
      <div className={type}>
        <div>
          <span>{icon}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
