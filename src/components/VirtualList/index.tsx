import React, { FC, useRef, CSSProperties } from 'react';
import Container from './Container';
import Item from './Item';
import { VirtualProps } from './interface';

const VirtualList: FC<VirtualProps> = ({ height = 100, dataSource }) => {
  const listRef = useRef<any>();
  const heightsRef = useRef(new Array(100));

  const getHeight = (index: number) => {
    return heightsRef.current[index];
  };

  const setHeight = (index: number, height: number) => {
    if (heightsRef.current[index] !== height) {
      heightsRef.current[index] = height;
      // 让 VariableSizeList 组件更新高度
      listRef.current.resetHeight();
    }
  };
  return (
    <Container
      ref={listRef}
      containerHeight={height}
      itemCount={dataSource?.length}
      getItemHeight={getHeight}
      dataSource={dataSource}
    >
      {({ index, style, data }: { index: number; style: CSSProperties; data: any[] }) => {
        return (
          <div style={style}>
            <Item {...{ index, data }} setHeight={setHeight} />
          </div>
        );
      }}
    </Container>
  );
};

export default VirtualList;
