import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {getRole} from '@/store/slices/auth';

import {
  mdiViewDashboard,
  mdiListBox,
  mdiAirplane,
  mdiAirplaneCog,
  mdiRoutes,
  mdiAppsBox,
  mdiAccount,
  mdiCog,
  mdiAccountCancel,
  mdiAccountGroup,
  mdiAccountBoxOutline,
  mdiFormatQuoteOpen,
} from '@mdi/js';

export interface NavLink {
  icon: string;
  title: string;
  to: string;
  children?: NavLink[];
}

export const useNavLinks = () => {
  const userRole = useSelector(getRole);

  const navLinks = useMemo(() => {
    const navLinks: NavLink[] = [
      {icon: mdiViewDashboard, title: 'dashboard', to: '/dashboard'},
      {
        icon: mdiListBox,
        title: 'requests',
        to: userRole === 'CLIENT' ? '/client-requests' : '/agent-requests',
      },
    ];

    if (userRole === 'AGENT') {
      navLinks.push({
        icon: mdiAirplane,
        title: 'set up',
        to: '',
        children: [
          {
            icon: mdiAirplaneCog,
            title: 'services',
            to: '/services',
          },
          {
            icon: mdiAppsBox,
            title: 'goods',
            to: '/goods',
          },
          {
            icon: mdiRoutes,
            title: 'routes',
            to: '/routes',
          },
        ],
      });
    }

    if (userRole === 'ADMIN' || userRole === 'SUPER_ADMIN') {
      navLinks.push(
        {
          icon: mdiAccountBoxOutline,
          title: 'Users',
          to: '',
          children: [
            {
              icon: mdiAccountGroup,
              title: 'all users',
              to: '/users',
            },
            {
              icon: mdiAccountCancel,
              title: 'blocked users',
              to: '/blocked-users',
            },
          ],
        },
        {icon: mdiFormatQuoteOpen, title: 'quotes', to: '/quotes'}
      );
    }

    navLinks.push(
      {icon: mdiAccount, title: 'profile', to: '/profile'},
      {icon: mdiCog, title: 'settings', to: '/settings'}
    );

    return navLinks;
  }, [userRole]);

  return {
    navLinks,
  };
};
