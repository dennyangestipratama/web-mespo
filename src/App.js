import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navigation, NavigationMobile } from '@Layouts'
import { MOBILE_VIEW } from '@Utilities'
import Routes from '@Routes'

import Login from '@Screens/Login'

export default class App extends Component {
   render() {
      return (
         <Router>
            <Switch>
               <Route exact path='/' component={Login} />
               <div className='home'>
                  {MOBILE_VIEW ? <NavigationMobile /> : <Navigation />}
                  {Routes.map((route, index) => (
                     <Route exact={route.exact} path={route.route} component={route.component} key={index} />
                  ))}
               </div>
            </Switch>
         </Router>
      )
   }
}
