import { CSSProperties, ReactNode } from 'react';

export type SpaceSize = 'small' | 'medium' | 'large' | number;

export interface SpaceProps {
  style?: CSSProperties;
  className?: string | string[];
  /** 间距方向 */
  direction?: 'vertical' | 'horizontal';
  /** 间距大小 */
  size?: SpaceSize | SpaceSize[];
  /** 四周环绕间距，且换行 */
  aroundWrap: boolean;
  /** 分隔符，可与 Divider 搭配使用 */
  split?: ReactNode;
  /** 设置间距的元素 */
  children?: ReactNode;
}
