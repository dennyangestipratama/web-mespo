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
      component: Features,
      route: '/features',
      name: 'Features',
      exact: true,
   },
]

export default Routes
