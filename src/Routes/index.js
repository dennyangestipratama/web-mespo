import SystemEnvironment from '@Screens/SystemEnvironment'

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
]

export default Routes
