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
      name: 'Create System',
      exact: false,
   },
   {
      component: SystemEnvironment,
      route: '/system-environment/update/:id',
      name: 'Update System',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/system-environment/update/:id/env/:envId',
      name: 'Update Environment',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/system-environment/system/:id',
      name: 'Detail System',
      exact: true,
   },
   {
      component: SystemEnvironment,
      route: '/system-environment/system/:id/env/:envId',
      name: 'Detail System Environment',
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
