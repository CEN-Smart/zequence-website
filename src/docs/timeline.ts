import { GrIteration } from 'react-icons/gr';
import { IconType } from 'react-icons';
type Timeline = {
  title: string;
  description: string;
  icon: IconType;
};

export const timelines: Timeline[] = [
  {
    title: 'Web Development',
    description:
      'We build websites that are fast, secure, and user-friendly. Our websites are optimized for search engines and are designed to convert visitors into customers.',
    icon: GrIteration,
  },
  {
    title: 'Web Design',
    description:
      'We design websites that are visually appealing and easy to navigate. Our websites are responsive and look great on all devices.',
    icon: GrIteration,
  },
  {
    title: 'Digital Marketing',
    description:
      'We help businesses grow their online presence and increase their revenue. Our digital marketing services include search engine optimization, social media marketing, and pay-per-click advertising.',
    icon: GrIteration,
  },
];
