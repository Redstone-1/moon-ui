import { CSSProperties, ReactNode } from 'react';

export interface OptionsProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 样式类 */
  className?: string | string[];
  /** 类型函数 */
  type?: 'success' | 'warning' | 'danger' | 'info' | 'loading';
  /** 尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 提示内容 */
  content?: ReactNode;
  /** 延迟显示时间 */
  delay?: number;
  /** 提示持续时间 */
  duration?: number;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 是否显示图标 */
  showIcon?: boolean;
}
