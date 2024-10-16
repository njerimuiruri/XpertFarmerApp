import {icons} from '../../constants';
import BottomTabs from '../../navigation/Tabs';
import {Home} from '../../screens';

export const ScreensArray = [
  {
    route: 'Dashboard',
    label: 'Homel',
    type: icons.call,
    icon: icons.home,
    component: BottomTabs,
    notification: 0,
  },

  {
    route: 'School info',
    label: 'School-info',
    type: icons.call,
    icon: icons.school,
    component: BottomTabs,
    notification: 2,
  },

  {
    route: 'Reports',
    label: 'Reports',
    type: icons.call,
    icon: icons.report,
    component: BottomTabs,
    notification: 2,
  },
  {
    route: 'Help',
    label: 'Help',
    type: icons.call,
    icon: icons.help,
    component: BottomTabs,
    notification: 2,
  },
];

export const ProjectsArray = [
  {
    title: 'Personal',
    icon: 'profile',
    color: 'red',
    iconType: icons.call,
  },
  {
    title: 'travel',
    icon: 'profile',
    color: 'red',
    iconType: icons.call,
  },
  {
    title: 'Business',
    icon: 'profile',
    color: 'red',
    iconType: icons.call,
  },
  {title: 'Add', icon: 'plus', color: 'red', iconType: icons.call},
];

export const ProfileMenu = [
  {label: 'History', icon: 'history', iconType: icons.call},
  {label: 'Rate', icon: 'star', iconType: icons.call},
  {label: 'Share', icon: 'share', iconType: icons.call},
  {label: 'Logout', icon: 'logout', iconType: icons.call},
];
