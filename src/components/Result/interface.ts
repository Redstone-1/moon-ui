import { CSSProperties, ReactNode } from 'react';

export interface ResultProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string | string[];
  /** 自定义 icon */
  icon?: ReactNode;
  /** 主标题 */
  title?: string;
  /** 次标题 */
  subTitle?: string;
  /** 状态 */
  status?: 'success' | 'error' | 'info' | 'warning' | 'status404' | 'status403' | 'status500';
  /** 额外的内容 */
  extra?: ReactNode;
}
