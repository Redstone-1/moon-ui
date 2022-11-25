import { NoticeProps } from '../../typings';

export interface NodeProps {
  node: any;
  config: NoticeProps;
  id: number | string;
  _delayTimer: number;
  _durationTimer: number;
}

export interface StateProps {
  leftNodeList: any[];
  centerNodeList: any[];
  rightNodeList: any[];
  activeIDList: any[];
}

export interface NIProps {
  key: number;
  id: number;
  show: boolean;
  config: NoticeProps;
  children: React.ReactNode;
}

export interface NCProps {
  addChild: (item: any, config: NoticeProps) => void;
  removeChild: (item: any, config: NoticeProps) => void;
}
