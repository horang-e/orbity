import { IUser } from '@/components/@types/server';
import React from 'react';

type IProfileBoxProps = {
  type: 'small' | 'full';
  user: IUser;
};

const ProfileBox = (props: IProfileBoxProps) => {
  return <div>ProfileBox</div>;
};

export default ProfileBox;
