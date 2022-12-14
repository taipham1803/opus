import {Source} from 'react-native-fast-image';

export type JobProperty = {
  id: number | string;
  icon?: Source;
  title: string;
  content: string;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
};

export type JobRequirement = {
  id: number | string;
  title: string;
  value: string[];
  fontSize?: number;
  fontWeight?: string;
  color?: string;
};

export type Job = {
  id: number | string;
  title: string;
  company: string;
  properties: JobProperty[];
  requirements: JobRequirement[];
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
