import SystemEnvironment from '@Screens/SystemEnvironment'
import Toggles from '@Screens/Toggles'
import Features from '@Screens/Features'

const Routes = [
   {
      component: SystemEnvironment,
      route: '/system',
      name: 'System Environment',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/system/:ID',
      name: 'System Environment',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/create',
      name: 'System Environment',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/create/environment',
      name: 'System Environment',
      exact: true,
   },
   {
      component: Toggles,
      route: '/toggles',
      name: 'Toggles',
      exact: true,
   },
   {
      component: Features,
      route: '/features',
      name: 'Features',
      exact: true,
   },
]

export default Routes
