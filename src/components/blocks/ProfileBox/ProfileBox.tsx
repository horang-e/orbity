import { IUser } from '@/components/@types/server';
import Chips from '@/components/atoms/Chips/Chips';
import React from 'react';

type IProfileBoxProps = {
  //확장형, 축소형
  type: 'small' | 'full';
  //유저 정보
  user: IUser;
  //유저 설명 비활성화 여부
  disabledDescription?: boolean;
};

const ProfileBox = (props: IProfileBoxProps) => {
  return props.type === 'full' ? (
    <div className='flex items-center flex-col gap-1 w-full'>
      {!props.disabledDescription && (
        <Chips
          projectTag={{
            CONTENT: props.user.JOB_TYPE,
          }}
        />
      )}
      <img src={props.user.PROFILE_PICTURE} alt='프로필 사진' className='w-[74px] h-[74px] rounded-full my-2' />
      <p className='text-sm font-medium text-grey-300'>잔디행성까지 100m 남은</p>
      <p className='text-xl font-semibold text-grey-400'>{props.user.NICK_NAME}</p>
      {!props.disabledDescription && (
        <p className='text-sm font-light text-grey-300 text-wrap mt-4  w-full line-clamp-2	'>{props.user.DESCRIPTION}</p>
      )}
    </div>
  ) : (
    <div className='flex items-center gap-2'>
      <img src={props.user.PROFILE_PICTURE} alt='프로필 사진' className='w-[20px] h-[20px] rounded-xl' />
      <p className='text-xs font-medium text-grey-200'>{props.user.NICK_NAME}(19KM)</p>
    </div>
  );
};

export default ProfileBox;
