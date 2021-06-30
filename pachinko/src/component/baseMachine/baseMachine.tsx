import React, { useState } from 'react';

type Props = {
  // children: React.ReactNode
};

export const BaseMachine: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  const drawLotsNumber = (): number => {
    // 0 ~ 65535の範囲でランダム値を生成
    return Math.floor(Math.random() * 65536);
  };

  const addCount = () => {
    setCount(prevState => prevState+1);
  };

  const onClickAction = () => {
    setSelectedNumber(drawLotsNumber());
    addCount();
  };

  return (
    <>
      <p>回転数: {count}</p>
      <p>SelectedNumber: {selectedNumber}</p>
      <div>
        <button onClick={onClickAction}>
          <p>抽選</p>
        </button>
      </div>
    </>
  );
}