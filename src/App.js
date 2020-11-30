import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navigation } from '@Layouts'
import Routes from '@Routes'

const App = () => {
  return (
    <Router>
      <Navigation />
      {Routes.map((route, index) => (
        <Route exact path={route.route} component={route.component} key={index} />
      ))}
    </Router>
  );
}

export default App