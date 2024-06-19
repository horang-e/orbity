import { IProject, IUser } from '../@types/server';

const ProjectExample: IProject[] = [
  {
    PROJECT_ID: 1,
    USER_ID: 1,
    STATUS: 'IN_PROGRESS',
    TITLE: 'Project Title',
    START_DATE: new Date(),
    DESCRIPTION: 'Project Description',
    VIEW: 100,
    NUM_FE: 1,
    NUM_BE: 1,
    NUM_DESIGNER: 1,
    NUM_PM: 1,
    PROJECT_TAGS: ['JAvascript', 'React', 'Node.js'],
  },
];

const UserExample: IUser = {
  USER_ID: 1,
  NICK_NAME: '안녕토마스안녕토마스222223333',
  PROFILE_PICTURE: 'https://i.pinimg.com/236x/2f/55/97/2f559707c3b04a1964b37856f00ad608.jpg',
  EMAIL: 'Email',
  JOB_TYPE: 'FE',
  INTEREST_FIELDS: ['Interest Fields'],
  DESCRIPTION: 'DescriptionDescriptionDescriptionDescriptionDescription',
  PERSONAL_LINKS: [
    {
      LINK_NAME: 'Link Name',
      LINK_URL: 'Link URL',
    },
  ],
  SNS_TYPE: 'GITHUB',
  FIELD: 'Field',
};

export { ProjectExample, UserExample };
