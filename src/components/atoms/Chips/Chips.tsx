import { IProjectTag } from '@/components/@types/server';
import React from 'react';

interface IChipProps {
  projectTag: IProjectTag;
}

const Chips = (props: IChipProps) => {
  //* Constants
  const tagConfig: any = {
    class: {
      FE: 'rounded-full px-2 py-1 text-xs text-front-end-100 bolder-solid border-front-end-100 border-2',
      BE: 'rounded-full px-2 py-1 text-xs text-back-end-100 bolder-solid border-back-end-100 border-2',
      DESIGNER: 'rounded-full px-2 py-1 text-xs text-designer-100 bolder-solid border-designer-100 border-2',
      PM: 'rounded-full px-2 py-1 text-xs text-pm-100 bolder-solid border-pm-100 border-2',
    },
    text: {
      FE: '프론트엔드',
      BE: '백엔드',
      DESIGNER: '디자이너',
      PM: 'PM',
    },
  };

  return <div className={tagConfig.class[props.projectTag.CONTENT]}>{tagConfig.text[props.projectTag.CONTENT]}</div>;
};

export default Chips;
