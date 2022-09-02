import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string | string[];
  /** 内容 */
  children?: ReactNode;
  /** 基本类型 */
  type?: 'primary' | 'secondary' | 'dashed' | 'outline';
  /** 尺寸，想要宽度100%请使用内联样式或类样式 */
  size?: 'small' | 'medium' | 'large';
  /** 形状 */
  shape?: 'circle' | 'round' | 'square';
  /** 状态 */
  status?: 'warning' | 'danger' | 'success';
  /** 禁用*/
  disabled?: boolean;
  /** 加载中 */
  loading?: boolean;
  /** 图标 */
  icon?: ReactNode;
  /** 图标位置，默认左侧 */
  iconPosition?: 'left' | 'right';
  /** 原生类型 */
  htmlType?: 'button' | 'submit' | 'reset';
  /** 点击事件 */
  onClick?: (e: Event) => void;
}

export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
