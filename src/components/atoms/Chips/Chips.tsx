import { IProjectTag } from '@/components/@types/server';
import React from 'react';

interface IChipProps {
  projectTag: IProjectTag;
}

const Chips = (props: IChipProps) => {
  //* Constants
  const tagConfig: any = {
    class: {
      FE: 'rounded-full px-2 py-1 text-xs text-front-end bolder-solid border-front-end border',
      BE: 'rounded-full px-2 py-1 text-xs text-back-end bolder-solid border-back-end border',
      DESIGNER: 'rounded-full px-2 py-1 text-xs text-designer bolder-solid border-designer border',
      PM: 'rounded-full px-2 py-1 text-xs text-pm bolder-solid border-pm border',
    },
    text: {
      FE: '프론트엔드',
      BE: '백엔드',
      DESIGNER: '디자이너',
      PM: 'pm',
    },
  };

  return <div className={tagConfig.class[props.projectTag.CONTENT]}>{props.projectTag.CONTENT}</div>;
};

export default Chips;
