import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navigation } from '@Layouts'
import Routes from '@Routes'

const App = () => {
	return (
		<Router>
			<div className='home'>
				<Navigation />
				{Routes.map((route, index) => (
					<Route exact path={route.route} component={route.component} key={index} />
				))}
			</div>
		</Router>
	)
}

export default App
