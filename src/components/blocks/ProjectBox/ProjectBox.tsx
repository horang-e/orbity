'use client';

import { IProject, IProjectTag, IUser } from '@/components/@types/server';
import React from 'react';
import ProfileBox from '../ProfileBox/ProfileBox';
import Chips from '@/components/atoms/Chips/Chips';

interface IProjectBoxProps {
  //프로젝트 정보
  project: IProject;
  //프로젝트 태그
  projectTags: IProjectTag[];
  //프로젝트 전체 좋아요 수
  projectLikes: number;
  //사용자가 해당 프로젝트에 좋아요를 눌렀는지 여부
  userLike: boolean;
  //좋아요 버튼 클릭 시 호출되는 함수
  // onClickLike: (projectId?: number, userId?: number, like?: boolean) => void;
  //프로젝트 생성 유저
  user: IUser;
  //확장형, 축소형
  type: 'small' | 'full';
}

const ProjectBox = (props: IProjectBoxProps) => {
  const typeStyleConfig: any = {
    outer: {
      small: 'flex flex-col min-w-[390px] bg-white p-8 rounded-xl shadow-lg min-h-[292px] justify-between',
      full: 'flex min-w-[800px] bg-white p-8 rounded-xl  min-h-[292px] justify-between border-grey-100 border-2 ',
    },
    inner: {
      small: 'flex flex-col',
      full: 'flex flex-col w-2/3 pr-8',
    },
    profile: {
      small: 'flex gap-2 justify-between items-center',
      full: 'flex justify-center gap-2 items-center w-1/3 border-l-2 border-grey-100 ',
    },
  };

  return (
    <div className={typeStyleConfig.outer[props.type]}>
      <div className={typeStyleConfig.inner[props.type]}>
        {/* 태그&좋아요 */}
        <div className='flex flex-row justify-between mb-2'>
          {/* 태그 */}
          <div className='flex flex-row gap-2'>
            {props.projectTags.map((tag, index) => (
              <Chips key={index} projectTag={tag} />
            ))}
          </div>
          {/* 좋아요 */}
          <img src='/heart_grey.svg' alt='좋아요' className='w-[20px] h-[20px]' />
        </div>
        {/* 내용 */}
        <div className='min-h-[100px] '>
          <p className='font-semibold text-xl mb-1'>{props.project.TITLE}</p>
          <p className='font-light mb-2 text-grey-300'>{props.project.DESCRIPTION}</p>
        </div>
        {/* 프로젝트 태그 */}
        <div className='flex gap-2 mb-2'>
          {props.project.PROJECT_TAGS.map((tag, index) => (
            <div className='text-xs text-primary'>#{tag}</div>
          ))}
        </div>
        {/*full일때 뷰수, 좋아요수 */}
        {props.type === 'full' && (
          <div className='flex gap-2 justify-end items-center'>
            <div className='flex gap-1 justify-between items-center'>
              <img src='/heart_blue.svg' alt='좋아요' className='w-[14px] h-[12px]' />
              <span className='text-xs text-grey-400'>{props.project.VIEW}</span>
            </div>
            <div className='flex gap-1 justify-between items-center'>
              <img src='/eye_blue.svg' alt='좋아요' className='w-[15px] h-[10px]' />
              <span className='text-xs text-grey-400'>{props.projectLikes}</span>
            </div>
          </div>
        )}
      </div>

      {/* 유저프로필& 뷰수,좋아요수 */}
      <div className={typeStyleConfig.profile[props.type]}>
        <ProfileBox type={props.type} user={props.user} />
        {props.type === 'small' && (
          <div className='flex gap-2 justify-between items-center'>
            <div className='flex gap-1 justify-between items-center'>
              <img src='/heart_blue.svg' alt='좋아요' className='w-[14px] h-[12px]' />
              <span className='text-xs text-grey-400'>{props.project.VIEW}</span>
            </div>
            <div className='flex gap-1 justify-between items-center'>
              <img src='/eye_blue.svg' alt='좋아요' className='w-[15px] h-[10px]' />
              <span className='text-xs text-grey-400'>{props.projectLikes}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
