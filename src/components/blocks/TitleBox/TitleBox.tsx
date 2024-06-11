import React from 'react';

interface ITitleBoxProps {
  //타이틀
  title: string;
  //부제목
  subTitle: string;
  //우측 추가 버튼
  rightButton: React.ReactNode;
}

const TitleBox = (props: ITitleBoxProps) => {
  return (
    <div className='flex flex-row w-full justify-between'>
      <div className='flex flex-col'>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
      {props.rightButton}
    </div>
  );
};

export default TitleBox;
