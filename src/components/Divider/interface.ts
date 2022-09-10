import { CSSProperties, ReactNode } from 'react';

export interface DividerProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 样式类 */
  className?: string | string[];
  /** 分割方向，默认 vertical */
  type?: 'horizontal' | 'vertical';
  /** 分割线左右边距 */
  margin?: number;
  /** 分割线尺寸 */
  size: number;
  /** 分割线颜色 */
  color?: string;
  /** 分割线文本位置 */
  orientation?: 'left' | 'right' | 'center';
  /** 分割线上的文本内容 */
  children?: ReactNode;
}
