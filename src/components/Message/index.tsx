import React from 'react';
import {
  CheckCircleOutlined,
  WarningOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  Loading3QuartersOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import { modalControl } from '../ModalContainer';
import { OptionsProps } from './interface';
import './index.less';

const defaultOptions = {
  icon: <CheckCircleOutlined />,
  size: 'small',
  showIcon: true,
  content: '提示',
  duration: 2000,
  delay: 0,
  style: {},
  className: '',
};

function Message<OptionsProps>({
  style = {},
  className = '',
  type = 'success',
  size = 'small',
  content = '提示',
  showIcon = true,
  icon = <CheckCircleOutlined />,
}) {
  const classes = classNames(
    'message',
    {
      ['message-success']: type === 'success',
      ['message-warning']: type === 'warning',
      ['message-danger']: type === 'danger',
      ['message-info']: type === 'info',
      ['message-loading']: type === 'loading',

      ['message-small']: size === 'small',
      ['message-medium']: size === 'medium',
      ['message-large']: size === 'large',
    },
    className,
  );
  return (
    <div style={style} className={classes}>
      <span className={`${showIcon ? 'message-icon' : ''}`}>{showIcon && icon}</span>
      <span>{content}</span>
    </div>
  );
}

function success(options: OptionsProps = defaultOptions as any) {
  const {
    icon,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
  } = options;
  modalControl.addChild(
    <Message
      style={style}
      className={className as any}
      type="success"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration },
  );
}

function warning(options: OptionsProps = defaultOptions as any) {
  const {
    icon = <WarningOutlined />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
  } = options;
  modalControl.addChild(
    <Message
      style={style}
      className={className as any}
      type="warning"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration },
  );
}

function danger(options: OptionsProps = defaultOptions as any) {
  const {
    icon = <ExclamationCircleOutlined />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
  } = options;
  modalControl.addChild(
    <Message
      style={style}
      className={className as any}
      type="danger"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration },
  );
}

function info(options: OptionsProps = defaultOptions as any) {
  const {
    icon = <InfoCircleOutlined />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
  } = options;
  modalControl.addChild(
    <Message
      style={style}
      className={className as any}
      type="info"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration },
  );
}

function loading(options: OptionsProps = defaultOptions as any) {
  const {
    icon = <Loading3QuartersOutlined spin />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
  } = options;
  modalControl.addChild(
    <Message
      style={style}
      className={className as any}
      type="loading"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration },
  );
}

Message.success = success;
Message.warning = warning;
Message.danger = danger;
Message.info = info;
Message.loading = loading;

export default Message;
