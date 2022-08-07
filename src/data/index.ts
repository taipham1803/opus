import {icons, images, placeholders} from 'assets';
import {PopularCity} from 'entity/popular';
import {Recommend} from 'entity/recommend';
import {SuggestJob} from 'entity/suggest';

export const dummyDataRecommends: Recommend[] = [
  {
    id: 0,
    icon: images.timecard,
    title: 'Timecards',
    description: 'Easily upload images of your timecards for quick processing.',
  },
  {
    id: 0,
    icon: images.timecard,
    title: 'Credentialing',
    description:
      'Add information for background check and I9. (Links to Essium)',
  },
];

export const dummyDataSuggested: SuggestJob[] = [
  {
    id: 0,
    banner: placeholders.place1,
    location: 'Boston, MA',
    job: {
      id: 'Boston-MA-',
      title: 'Registered Nurse',
      company: 'Enloe Medical Center',
      properties: [
        {
          id: '',
          icon: icons.iconSpecialty,
          title: 'Labor and Delivery',
        },
        {
          id: '',
          icon: icons.iconCalendarNew,
          title: '12 Weeks',
          fontWeight: '500',
        },
        {
          id: '',
          icon: icons.iconSunnyDay,
          title: 'Days',
          fontWeight: '500',
        },
      ],
      match: 97,
      estimatedSalary: '$3,659.09 - 4,500',
      salaryTimeUnit: '/wk',
    },
    shareable: true,
    likeable: true,
    liked: false,
  },
  {
    id: 1,
    banner: placeholders.place2,
    location: 'Boston, MA',
    job: {
      id: 'Boston-MA-',
      title: 'Registered Nurse',
      company: 'Enloe Medical Center',
      properties: [
        {
          id: '',
          icon: icons.iconSpecialty,
          title: 'Labor and Delivery',
        },
        {
          id: '',
          icon: icons.iconCalendarNew,
          title: '12 Weeks',
          fontWeight: '500',
        },
        {
          id: '',
          icon: icons.iconSunnyDay,
          title: 'Days',
          fontWeight: '500',
        },
      ],
      match: 97,
      estimatedSalary: '$3,659.09 - 4,500',
      salaryTimeUnit: '/wk',
    },
    shareable: true,
    likeable: true,
    liked: false,
  },
  {
    id: 2,
    banner: placeholders.place1,
    location: 'Boston, MA',
    job: {
      id: 'Boston-MA-',
      title: 'Registered Nurse',
      company: 'Enloe Medical Center',
      properties: [
        {
          id: '',
          icon: icons.iconSpecialty,
          title: 'Labor and Delivery',
        },
        {
          id: '',
          icon: icons.iconCalendarNew,
          title: '12 Weeks',
          fontWeight: '500',
        },
        {
          id: '',
          icon: icons.iconSunnyDay,
          title: 'Days',
          fontWeight: '500',
        },
      ],
      match: 97,
      estimatedSalary: '$3,659.09 - 4,500',
      salaryTimeUnit: '/wk',
    },
    shareable: true,
    likeable: true,
    liked: false,
  },
];

export const dummyDataPopularCities: PopularCity[] = [
  {
    id: 1,
    city: {
      id: 'san-francisco',
      name: 'San Francisco',
      state: 'California',
      image: placeholders.popularCity1,
    },
    matches: 15,
    estimateSalary: 2659.09,
    salaryTimeUnit: '/wk',
  },
  {
    id: 2,
    city: {
      id: 'boston',
      name: 'Boston',
      state: 'Massachusetts',
      image: placeholders.popularCity2,
    },
    matches: 15,
    estimateSalary: 1859.3,
    salaryTimeUnit: '/wk',
  },
  {
    id: 3,
    city: {
      id: 'chicago',
      name: 'Chicago',
      state: 'California',
      image: placeholders.popularCity3,
    },
    matches: 15,
    estimateSalary: 2900.23,
    salaryTimeUnit: '/wk',
  },
  {
    id: 4,
    city: {
      id: 'austin',
      name: 'Austin',
      state: 'Texas',
      image: placeholders.popularCity4,
    },
    matches: 15,
    estimateSalary: 2650.45,
    salaryTimeUnit: '/wk',
  },
  {
    id: 5,
    city: {
      id: 'portland',
      name: 'Portland',
      state: 'Oregon',
      image: placeholders.popularCity5,
    },
    matches: 15,
    estimateSalary: 1900.34,
    salaryTimeUnit: '/wk',
  },
  {
    id: 5,
    city: {
      id: 'houston',
      name: 'Houston',
      state: 'Washington',
      image: placeholders.popularCity6,
    },
    matches: 15,
    estimateSalary: 2720.32,
    salaryTimeUnit: '/wk',
  },
  {
    id: 5,
    city: {
      id: 'washington',
      name: 'Washington',
      state: 'District of Columbia',
      image: placeholders.popularCity7,
    },
    matches: 15,
    estimateSalary: 2010.54,
    salaryTimeUnit: '/wk',
  },
];
