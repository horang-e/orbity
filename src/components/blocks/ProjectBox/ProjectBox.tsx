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
  onClickLike: (projectId: number, userId: number, like: boolean) => void;
  //프로젝트 생성 유저
  user: IUser;
}

const ProjectBox = (props: IProjectBoxProps) => {
  return (
    <div>
      {/* 태그&좋아요 */}
      <div>
        {/* 태그 */}
        {props.projectTags.map((tag, index) => (
          <Chips key={index} projectTag={tag} />
        ))}
        {/* 좋아요 */}
        <button onClick={() => props.onClickLike(props.project.PROJECT_ID, props.user.USER_ID, !props.userLike)}>
          {props.projectLikes}
        </button>
      </div>
      {/* 내용 */}
      <div>
        <h1>{props.project.TITLE}</h1>
        <p>{props.project.DESCRIPTION}</p>
      </div>
      {/* 유저프로필& 뷰수,좋아요수 */}
      <div>
        <ProfileBox type={'small'} user={props.user} />
        <div>
          <span>{props.project.VIEW}</span>
          <span>{props.projectLikes}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
