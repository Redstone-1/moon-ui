export interface ContainerProps {
  /** 容器高度 */
  containerHeight: number;
  /** 获取列表项高度 */
  getItemHeight: (index: number) => number;
  /** 列表项数量 */
  itemCount: number;
  /** 列表数据源 */
  dataSource: any[];
  /** virtual-list 子节点 */
  children: any;
}

export interface ItemProps {
  index: number;
  data: any[];
  setHeight: (index: number, height: number) => void;
}

export interface VirtualProps {
  /** 容器高度 */
  height: number;
  /** 数据源 */
  dataSource: any[];
}
