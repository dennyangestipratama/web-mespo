import Login from '@Screens/Login'
import SystemEnvironment from '@Screens/SystemEnvironment'

const Routes = [
	{
		component: Login,
		route: '/login',
		name: 'Login',
	},
	{
		component: SystemEnvironment,
		route: '/',
		name: 'System Environment',
	},
	{
		component: SystemEnvironment,
		route: '/create',
		name: 'System Environment',
	},
	{
		component: SystemEnvironment,
		route: '/create/environment',
		name: 'System Environment',
	},
]

export default Routes
