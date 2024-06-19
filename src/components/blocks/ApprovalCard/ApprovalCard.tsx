'use client';

import { IUser } from '@/components/@types/server';
import React from 'react';
import ProfileBox from '../ProfileBox/ProfileBox';
import Button from '@/components/atoms/Button/Button';

interface IApprovalCardProps {
  //유저 정보
  user: IUser;
  //지원 포지션
  position: 'FE' | 'BE' | 'DESIGNER' | 'PM';
  //지원 현황 (대기중, 승인, 거절)
  status: 'waiting' | 'approved' | 'rejected';
  //지원 아이디
  applicationId: number;
}

const ApprovalCard = (props: IApprovalCardProps) => {
  //* Styles
  /**
   * 스태터스에 따른 카드 스타일
   */
  const statusCardStyle = {
    waiting:
      'bg-white min-w-[285px] min-h-[200px] rounded-xl shadow-lg flex flex-col justify-center items-center py-[18px] gap-4',
    approved: {
      FE: 'bg-front-end-100/50 w-[285px] min-h-[200px] rounded-xl shadow-lg flex flex-col justify-center items-center py-[18px] gap-4',
      BE: 'bg-back-end-100/50 w-[285px] min-h-[200px] rounded-xl shadow-lg flex flex-col justify-center items-center py-[18px] gap-4',
      DESIGNER:
        'bg-designer-100/50 w-[285px] min-h-[200px] rounded-xl shadow-lg flex flex-col justify-center items-center py-[18px] gap-4',
      PM: 'bg-pm-100/50 w-[285px] min-h-[200px] rounded-xl shadow-lg flex flex-col justify-center items-center py-[18px] gap-4',
    },
  };
  /**
   * 버튼 스타일
   */
  const buttonStyle = {
    FE: 'bg-front-end-100/75 w-10/12 text-center',
    BE: 'bg-back-end-100/75 w-10/12 text-center',
    DESIGNER: 'bg-designer-100/75 w-10/12 text-center',
    PM: 'bg-pm-100/75 w-10/12 text-center',
  };

  //* Functions
  /**
   * 스태터스 변경 함수
   */
  const onClickButton = (applicationId: number, status: 'approved' | 'rejected') => {
    console.log(applicationId, status);
  };

  return (
    props.status !== 'rejected' && (
      <div className={props.status === 'waiting' ? statusCardStyle.waiting : statusCardStyle.approved[props.position]}>
        <ProfileBox type={'full'} user={props.user} disabledDescription />
        {props.status === 'waiting' ? (
          <div className='flex justify-between gap-2'>
            <Button
              content='수락'
              style='hover:bg-primary bg-grey-100 hover:text-white'
              onClick={() => onClickButton(props.applicationId, 'approved')}
            />
            <Button
              content='거절'
              style='hover:bg-primary bg-grey-100 hover:text-white'
              onClick={() => onClickButton(props.applicationId, 'rejected')}
            />
          </div>
        ) : (
          <div className='w-full flex justify-center item-center'>
            <Button
              content='제외시키기'
              style={buttonStyle[props.position]}
              onClick={() => onClickButton(props.applicationId, 'rejected')}
            />
          </div>
        )}
      </div>
    )
  );
};

export default ApprovalCard;
