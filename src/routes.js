import SystemEnvironment from '@Screens/SystemEnvironment'
import Features from '@Screens/Features'

const Routes = [
   {
      component: SystemEnvironment,
      route: '/system-environment',
      name: 'System Environment',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/system-environment/create',
      name: 'System Environment',
      exact: false,
   },
   {
      component: SystemEnvironment,
      route: '/system-environment/system/:id',
      name: 'System Environment',
      exact: false,
   },
   {
      component: Features,
      route: '/features',
      name: 'Features',
      exact: true,
   },
]

export default Routes
