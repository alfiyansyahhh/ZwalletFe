import { IRouteType } from './interface';

// import { icons } from 'assets';

import Dashboard from 'pages/Dashboard';

const appRoutes: IRouteType[] = [
  {
    index: true,
    element: <Dashboard />,
    state: 'home',
  },
];

export default appRoutes;
