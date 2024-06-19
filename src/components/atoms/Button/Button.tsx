'use client';

import React, { Dispatch, SetStateAction, cloneElement, useState } from 'react';

interface IButtonProps {
  /**
   * 버튼 내용
   */
  content: string;
  /**
   * 버튼 스타일
   */
  style?: string;
  /**
   * 버튼 클릭 시 실행할 함수
   */
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  //* Styles
  const buttonStyle = 'px-[32px] py-[5px] rounded-md  text-sm font-normal cursor-pointer ' + props.style;
  //*State

  return (
    <div
      className={
        props.style
          ? buttonStyle
          : 'px-[32px] py-[5px] bg-primary rounded-md text-white text-sm font-normal cursor-pointer'
      }
      onClick={props.onClick}>
      {props.content}
    </div>
  );
};

export default Button;
