import Login from '@Screens/Login'
import SystemEnvirontment from '@Screens/SystemEnvirontment'

const Routes = [
   {
      component: Login,
      route: '/login',
      name: 'Home'
   },
   {
      component: SystemEnvirontment,
      route: '/',
      name: 'System Environtment'
   }
]

export default Routes