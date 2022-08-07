import {Source} from 'react-native-fast-image';

export type City = {
  id: string | number;
  name: string;
  state: string;
  image: Source;
};

export type PopularCity = {
  id: number | string;
  city: City;
  matches: number;
  estimateSalary: number;
  salaryTimeUnit: string;
};
