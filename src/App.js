import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navigation, NavigationMobile } from '@Layouts'
import { MOBILE_VIEW } from '@Utilities'
import Routes from '@Routes'

export default class App extends Component {
   render() {
      return (
         <Router>
            <div className='home'>
               {MOBILE_VIEW ? <NavigationMobile /> : <Navigation />}
               {Routes.map((route, index) => (
                  <Route exact={route.exact} path={route.route} component={route.component} key={index} />
               ))}
            </div>
         </Router>
      )
   }
}
