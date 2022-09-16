import { CSSProperties, ReactNode } from 'react';

export interface MessageProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 样式类 */
  className?: string | string[];
  /** 提示 title */
  title?: ReactNode;
  /** 提示内容 */
  content?: ReactNode;
  /** 提示类型函数名，不用传，Message.success 便是使用 success 类型 */
  type?: 'success' | 'warning' | 'error' | 'info' | 'loading';
  /** 提示大小 */
  size?: 'small' | 'meduim' | 'large';
  /** 提示持续时间 */
  duration?: number;
  /** 是否可关闭 */
  closable?: boolean;
  /** 是否显示遮罩 */
  hasMask?: boolean;
  /** 关闭提示的回调 */
  onClose?: () => void;
  /** 提示关闭后调用的函数 */
  afterClose?: () => void;
}
