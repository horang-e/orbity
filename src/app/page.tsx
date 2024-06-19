import Button from '@/components/atoms/Button/Button';
import ApprovalCard from '@/components/blocks/ApprovalCard/ApprovalCard';
import ProjectBox from '@/components/blocks/ProjectBox/ProjectBox';
import TitleBox from '@/components/blocks/TitleBox/TitleBox';
import { ProjectExample, UserExample } from '@/components/constant/example';
import Image from 'next/image';

export default function Home() {
  const projectTags = [{ CONTENT: 'FE' }, { CONTENT: 'PM' }];

  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      <TitleBox
        title='Welcome to Next.js'
        subTitle='Get started by editing src/pages/index.tsx'
        rightButton={<div className='underline'>자세히보기</div>}
      />
      <ProjectBox
        project={ProjectExample[0]}
        projectTags={projectTags}
        projectLikes={20}
        userLike={true}
        user={UserExample}
        type='full'
      />
      <Button content='클릭' style='hover:bg-primary bg-grey-200 hover:text-white' />
      <ApprovalCard user={UserExample} position='DESIGNER' status='approved' applicationId={1} />
    </main>
  );
}
