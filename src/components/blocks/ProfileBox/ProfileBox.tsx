import { IUser } from '@/components/@types/server';
import React from 'react';

type IProfileBoxProps = {
  //확장형, 축소형
  type: 'small' | 'full';
  //유저 정보
  user: IUser;
};

const ProfileBox = (props: IProfileBoxProps) => {
  return (
    <div className='flex items-center gap-2'>
      <img src={props.user.PROFILE_PICTURE} alt='프로필 사진' className='w-[20px] h-[20px] rounded-xl' />
      <p className='text-xs font-light'>{props.user.NICK_NAME}(19KM)</p>
    </div>
  );
};

export default ProfileBox;
