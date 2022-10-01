import { CSSProperties, ReactNode } from 'react';

export interface EmptyProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string | string[];
  /** 自定义显示图标 */
  icon?: ReactNode;
  /** 图片地址 */
  imgSrc?: string;
  /** 显示文案 */
  description?: ReactNode;
}
