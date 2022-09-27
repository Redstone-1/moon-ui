import { CSSProperties } from 'react';

export interface IconProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string | string[];
  /** 图标旋转角度 */
  rotate?: number;
  /** 图标旋转 */
  spin?: boolean;
  /** 双色图标主要颜色 */
  twoToneColor?: string;
}
