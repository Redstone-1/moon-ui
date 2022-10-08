import React from 'react';
import ReactDOM from 'react-dom';
import {
  CheckCircleOutlined,
  WarningOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  Loading3QuartersOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import NoticeContainer, { NoticeController } from '../_Notice';
import { OptionsProps } from './interface';
import './index.less';

/**
 * 挂载 Notice 容器
 */
export function initNoticeContainer() {
  let ele = document.getElementById('moon-ui-notice-contain');
  if (!ele) {
    // 如果不存在容器，则进行创建
    let sourceNoticeContainer = document.createElement('div');
    sourceNoticeContainer.id = 'moon-ui-notice-contain';
    document.body.append(sourceNoticeContainer);
    ele = document.getElementById('moon-ui-notice-contain');
    // 通过 ReactDOM 将容器挂载在真实 dom 上
    ReactDOM.render(<NoticeContainer />, ele);
  }
}

const defaultOptions = {
  icon: <CheckCircleOutlined />,
  size: 'small',
  showIcon: true,
  content: '提示',
  duration: 2000,
  delay: 0,
  style: {},
  className: '',
  position: 'left',
};

function Message<OptionsProps>({
  style = {},
  className = '',
  type = 'success',
  size = 'small',
  content = '提示',
  showIcon = true,
  icon = <CheckCircleOutlined />,
  delay = 0,
  duration = 2000,
  position = 'center',
}) {
  console.log('delay>>>>>', delay);
  console.log('duration>>>>>', duration);
  console.log('position>>>>>', position);
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
  initNoticeContainer();
  const {
    icon,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
    position = 'center',
  } = options;
  NoticeController.addChild(
    <Message
      style={style}
      className={className as any}
      type="success"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration, position },
  );
}

function warning(options: OptionsProps = defaultOptions as any) {
  initNoticeContainer();
  const {
    icon = <WarningOutlined />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
    position = 'center',
  } = options;
  NoticeController.addChild(
    <Message
      style={style}
      className={className as any}
      type="warning"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration, position },
  );
}

function danger(options: OptionsProps = defaultOptions as any) {
  initNoticeContainer();
  const {
    icon = <ExclamationCircleOutlined />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
    position = 'center',
  } = options;
  NoticeController.addChild(
    <Message
      style={style}
      className={className as any}
      type="danger"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration, position },
  );
}

function info(options: OptionsProps = defaultOptions as any) {
  initNoticeContainer();
  const {
    icon = <InfoCircleOutlined />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
    position = 'center',
  } = options;
  NoticeController.addChild(
    <Message
      style={style}
      className={className as any}
      type="info"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration, position },
  );
}

function loading(options: OptionsProps = defaultOptions as any) {
  initNoticeContainer();
  const {
    icon = <Loading3QuartersOutlined spin />,
    size = 'small',
    showIcon,
    content,
    duration = 2000,
    delay = 0,
    style,
    className,
    position = 'center',
  } = options;
  NoticeController.addChild(
    <Message
      style={style}
      className={className as any}
      type="loading"
      size={size}
      content={content as any}
      showIcon={showIcon}
      icon={icon as any}
    />,
    { delay, duration, position },
  );
}

Message.success = success;
Message.warning = warning;
Message.danger = danger;
Message.info = info;
Message.loading = loading;

export default Message;
