import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Routes from './routes'
import Login from '@Screens/Login'

export default class App extends Component {
   render() {
      return (
         <Router>
            <Switch>
               <Route exact path='/' component={Login} />
               {Routes.map((route, index) => (
                  <Route exact={route.exact} path={route.route} component={route.component} key={index} />
               ))}
            </Switch>
         </Router>
      )
   }
}
