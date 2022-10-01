import { CSSProperties, ReactNode } from 'react';

export interface SpinProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string | string[];
  /** 加载提示文案 */
  tip?: ReactNode;
  /** 自定义显示图标 */
  icon?: ReactNode;
  /** loading 状态 */
  loading?: ReactNode;
  /** 被包裹的组件或节点 */
  children?: ReactNode;
  /** 遮罩样式 */
  maskStyle?: CSSProperties;
}
