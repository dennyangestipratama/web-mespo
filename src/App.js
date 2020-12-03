import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navigation, NavigationMobile } from '@Layouts'
import { MOBILE_VIEW } from '@Utilities'
import Routes from '@Routes'

const App = () => {
	return (
		<Router>
			<div className='home'>
				{MOBILE_VIEW ? <NavigationMobile /> : <Navigation />}
				{Routes.map((route, index) => (
					<Route exact path={route.route} component={route.component} key={index} />
				))}
			</div>
		</Router>
	)
}

export default App
