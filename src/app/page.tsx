import ProjectBox from '@/components/blocks/ProjectBox/ProjectBox';
import TitleBox from '@/components/blocks/TitleBox/TitleBox';
import { ProjectExample, UserExample } from '@/components/constant/example';
import Image from 'next/image';

export default function Home() {
  const projectTags = [{ CONTENT: 'FE' }, { CONTENT: 'PM' }];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
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
      />
    </main>
  );
}
