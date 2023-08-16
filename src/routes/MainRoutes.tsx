import MainBottomTab from './BottomTab';
import {FeedRoutes} from './FeedRoutes';

export const MainRoutes = [
  {
    name: 'MainMenu',
    component: MainBottomTab,
    options: {headerShown: false},
  },
  ...FeedRoutes,
];
