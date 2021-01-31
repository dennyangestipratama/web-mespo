import { ReactComponent as SystemEnvironment } from '@Icon/phone.svg'
import { ReactComponent as Features } from '@Icon/feature.svg'
import { ReactComponent as Toggles } from '@Icon/toggles-off.svg'
import { ReactComponent as Account } from '@Icon/account.svg'
import { ReactComponent as People } from '@Icon/people.svg'
import { ReactComponent as Roles } from '@Icon/hat.svg'

export const NAVIGATION_TAB = [
   {
      ID: 1,
      title: 'Dynamic Properties',
      tab: [
         {
            ID: 1,
            title: 'System Environment',
            icon: <SystemEnvironment />,
            href: '/system-environment',
         },
      ],
   },
   {
      ID: 2,
      title: 'Features & Toggles',
      tab: [
         {
            ID: 1,
            title: 'Features',
            icon: <Features />,
            href: '/features',
         },
         {
            ID: 2,
            title: 'Toggles',
            icon: <Toggles />,
            href: '/toggles',
         },
      ],
   },
   {
      ID: 3,
      title: 'Accounts',
      tab: [
         {
            ID: 1,
            title: 'Me',
            icon: <Account />,
            href: '/account',
         },
         {
            ID: 2,
            title: 'People',
            icon: <People />,
            href: '/people',
         },
         {
            ID: 3,
            title: 'Roles',
            icon: <Roles />,
            href: '/roles',
         },
      ],
   },
]
