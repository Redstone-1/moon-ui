import { CSSProperties, ReactNode } from 'react';

export interface SwitchProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 样式类 */
  className?: string | string[];
  /** 是否开关 */
  value?: boolean;
  /** 尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** active 颜色 */
  activeColor?: string;
  /** inActive 颜色 */
  inActiveColor?: string;
  /** ball 颜色 */
  ballColor?: string;
  /** ball 内容 */
  ballContent?: ReactNode;
  /** 禁用 */
  disabled?: boolean;
  /** 切换的回调 */
  onChange?: (value: boolean, e: Event) => void;
}
