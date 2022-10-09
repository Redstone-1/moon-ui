import { CSSProperties, ReactNode } from 'react';

export interface LinkProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string | string[];
  /** 自定义 icon */
  icon?: ReactNode;
  /** href 地址 */
  href?: string;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 状态 */
  status?: 'error' | 'success' | 'warning';
  /** 禁用 */
  disabled?: boolean;
  /** hover 时是否显示底色 */
  hoverable?: boolean;
  /** link 内容 */
  children?: ReactNode;
}
