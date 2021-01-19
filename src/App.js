import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Routes from './routes'
import Login from '@Screens/Login'
import Navigation from '@Layouts/Navigation'

export default function App() {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Login} />
            <section className='home'>
               <Navigation />
               {Routes.map((route, index) => (
                  <Route exact={route.exact} path={route.route} component={route.component} key={index} />
               ))}
            </section>
         </Switch>
      </Router>
   )
}
