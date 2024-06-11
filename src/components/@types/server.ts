interface IProject {
  PROJECT_ID: number;
  USER_ID: number;
  STATUS: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  TITLE: string;
  START_DATE: Date;
  DESCRIPTION: string;
  VIEW: number;
  NUM_FE: number;
  NUM_BE: number;
  NUM_DESIGNER: number;
  NUM_PM: number;
  PROJECT_TAGS: string[];
}

interface IPersonalLink {
  LINK_NAME: string;
  LINK_URL: string;
}

interface IUser {
  USER_ID: number;
  NICK_NAME: string;
  PROFILE_PICTURE: string;
  EMAIL: string;
  JOB_TYPE: 'FE' | 'BE' | 'DESIGNER' | 'PM';
  INTEREST_FIELDS: string[];
  DESCRIPTION: string;
  PERSONAL_LINKS: IPersonalLink[];
  SNS_TYPE: 'GITHUB' | 'NAVER' | 'GOOGLE' | 'KAKAO';
  FIELD: string;
}

interface IProjectTag {
  CONTENT: string;
}

interface IProjectLike {
  PROJECT_ID: number;
  USER_ID: number;
  LIKE: boolean;
}

export type { IProject, IUser, IPersonalLink, IProjectTag, IProjectLike };
