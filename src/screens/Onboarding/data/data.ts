import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/loading-1.json'),
    text: 'Streamline Your Data Collection',
    textColor: 'white',
    backgroundColor: '#001118',
  },
  {
    id: 2,
    animation: require('../assets/loading1.json'),
    text: 'Effortlessly Manage Complex Surveys',
    textColor: 'white',
    backgroundColor: '#004d6d',
  },
  {
    id: 3,
    animation: require('../assets/loading3.json'),
    text: 'Analyze Results with Advanced Tools',
    textColor: 'white',
    backgroundColor: '#0089c2',
  },
];

export default data;
