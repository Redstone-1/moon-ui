import React, { useEffect, useState } from 'react';
import { NoticeProps } from '../../typings';
import { NIProps, NCProps, StateProps, NodeProps } from './interface';
import './index.less';

const NoticeController: NCProps = {
  addChild: () => {},
  removeChild: () => {},
};

function NoticeItem(props: NIProps) {
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    if (props.show === false) {
      setShow(false);
      return;
    }
    const div = document.getElementById(`${props.id}`);
    if (div) {
      div.style.width = `${div.clientWidth + 1}px`;
    }
  }, [props.show]);
  return (
    <div
      className={`notice-item ${show ? '' : 'notice-item-hidden'}`}
      style={{ '--duration--': `${props.config.duration}ms` } as any}
      id={`${props.id}`}
    >
      {props.children}
    </div>
  );
}

class NoticeContainer extends React.Component {
  state: StateProps;
  constructor(props: any) {
    super(props);
    this.state = {
      leftNodeList: [],
      centerNodeList: [],
      rightNodeList: [],
      activeIDList: [],
    };
    const addChild = async (item: any, config: NoticeProps) => {
      const id = new Date().getTime();
      const { position } = config;
      const newLeftNodeList = [...this.state.leftNodeList];
      const newCenterNodeList = [...this.state.centerNodeList];
      const newRightNodeList = [...this.state.rightNodeList];
      const newActiveIDList = [...this.state.activeIDList, id];

      const newNode: NodeProps = {
        id,
        node: item,
        config,
        _delayTimer: -1,
        _durationTimer: -1,
      };

      const addPositonNodes = (key: string, nodeList: any[]) => {
        if (config.delay > 0) {
          newNode._delayTimer = setTimeout(() => {
            this.setState(
              {
                activeIDList: [id],
                [key]: [newNode],
              },
              () => {
                newNode._durationTimer = setTimeout(() => {
                  removeChild(newNode);
                }, config.duration);
              },
            );
          }, config.delay);
        } else {
          this.setState(
            {
              activeIDList: newActiveIDList,
              [key]: nodeList,
            },
            () => {
              newNode._durationTimer = setTimeout(() => {
                removeChild(newNode);
              }, config.duration);
            },
          );
        }
      };

      const addPositionNodeMap: any = {
        left: () => {
          newLeftNodeList.push(newNode);
          addPositonNodes('leftNodeList', newLeftNodeList);
        },
        center: () => {
          newCenterNodeList.push(newNode);
          addPositonNodes('centerNodeList', newCenterNodeList);
        },
        right: () => {
          newRightNodeList.push(newNode);
          addPositonNodes('rightNodeList', newRightNodeList);
        },
      };

      addPositionNodeMap[position]();
    };
    const removeChild = async (newNode: NodeProps) => {
      clearTimeout(newNode._delayTimer);
      clearTimeout(newNode._durationTimer);
      const newActiveIDList = this.state.activeIDList.filter(
        (activeId: string | number) => activeId !== newNode.id,
      );
      const newLeftNodeList = this.state.leftNodeList.filter((item) =>
        newActiveIDList.includes(item.id),
      );
      const newCenterNodeList = this.state.centerNodeList.filter((item) =>
        newActiveIDList.includes(item.id),
      );
      const newRightNodeList = this.state.rightNodeList.filter((item) =>
        newActiveIDList.includes(item.id),
      );
      this.setState({
        activeIDList: newActiveIDList,
        leftNodeList: newLeftNodeList,
        centerNodeList: newCenterNodeList,
        rightNodeList: newRightNodeList,
      });
    };
    NoticeController.addChild = addChild;
    NoticeController.removeChild = removeChild;
  }

  renderNode = (nodeList: any[], position: 'left' | 'center' | 'right') => {
    return (
      <>
        {nodeList.length ? (
          <div className={`notice-container-${position}`}>
            {nodeList.map((item) => (
              <NoticeItem
                key={item.id}
                id={item.id}
                show={this.state.activeIDList.indexOf(item.id) !== -1}
                config={item.config}
              >
                {item.node}
              </NoticeItem>
            ))}
          </div>
        ) : (
          ''
        )}
      </>
    );
  };

  render() {
    const { leftNodeList, centerNodeList, rightNodeList } = this.state;
    return (
      <>
        {this.renderNode(leftNodeList, 'left')}
        {this.renderNode(centerNodeList, 'center')}
        {this.renderNode(rightNodeList, 'right')}
      </>
    );
  }
}

export { NoticeController };
export default NoticeContainer;
