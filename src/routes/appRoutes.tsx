import { IRouteType } from './interface';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

import Dashboard from 'pages/Dashboard';
import Settings from 'pages/settings';
import Books from 'pages/books';
import BusinessSettings from 'pages/settings/business-settings';

const appRoutes: IRouteType[] = [
  {
    index: true,
    element: <Dashboard />,
    state: 'home',
  },
  {
    path: '/main/dashboard',
    element: <Dashboard />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <SpaceDashboardIcon />,
    },
  },
  {
    path: '/main/Book',
    element: <Books />,
    state: 'book',
    sidebarProps: {
      displayText: 'Books',
      icon: <ClassRoundedIcon />,
    },
  },
  {
    path: '/main/Business',
    element: <Dashboard />,
    state: 'Business',
    sidebarProps: {
      displayText: 'Business',
      icon: <AddBusinessRoundedIcon />,
    },
  },
  {
    path: '/main/settings',
    element: <Settings />,
    state: 'Settings',
    sidebarProps: {
      displayText: 'Settings',
      icon: <SettingsSuggestRoundedIcon />,
    },
    child: [
      {
        path: '/main/settings/business',
        element: <BusinessSettings />,
        state: 'Settings/Business',
        sidebarProps: {
          displayText: 'Business Settings',
        },
      },
    ],
  },
  // {
  //   path: '/full/transaksi',
  //   element: <TransaksiPage />,
  //   state: 'Transaksi',
  //   sidebarProps: {
  //     displayText: 'Transaksi',
  //     icon: <img className="imgIcon" src={icons.transaksi} alt="icon" />,
  //   },
  //   child: [
  //     {
  //       path: '/full/transaksi/withdrawal',
  //       element: <TransaksiWidralPage />,
  //       state: 'transaksi/withdrawal',
  //       sidebarProps: {
  //         displayText: 'Withdrawal',
  //       },
  //     },
  //     {
  //       path: '/full/transaksi/Refund',
  //       element: <RefundPage />,
  //       state: 'transaksi/Refund',
  //       sidebarProps: {
  //         displayText: 'Refund',
  //       },
  //     },
  //   ],
  // },
];

export default appRoutes;
