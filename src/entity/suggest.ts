import {Source} from 'react-native-fast-image';

export type JobProperty = {
  id: number | string;
  icon: Source;
  title: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
};

export type Job = {
  id: number | string;
  title: string;
  company: string;
  properties: JobProperty[];
  match: number;
  estimatedSalary: string;
  salaryTimeUnit: string;
};

export type SuggestJob = {
  id: number | string;
  banner: Source;
  location: string;
  job: Job;
  shareable: boolean;
  likeable: boolean;
  liked: boolean;
};
