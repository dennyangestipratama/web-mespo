import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '@Screens/Authentication/Login'
import SignUp from '@Screens/Authentication/SignUp'
import Verification from '@Screens/Authentication/Verification'
import Complete from '@Screens/Authentication/Complete'
import Navigation from '@Layouts/Navigation'
import { UtilsContext } from '@Context/UtilsContext'

import Routes from './routes'

export default function App() {
   const utilsContext = useContext(UtilsContext)
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signup/verification' component={Verification} />
            <Route exact path='/signup/complete' component={Complete} />
            <section
               className={`home ${!utilsContext.showAction && utilsContext.isMini ? 'home--fullsize' : ''} ${utilsContext.showAction ? '' : 'home--full'} ${
                  !utilsContext.isMini ? '' : 'home--mini'
               }`}>
               <Navigation />
               {Routes.map((route, index) => (
                  <Route exact={route.exact} path={route.route} component={route.component} key={index} />
               ))}
            </section>
         </Switch>
      </Router>
   )
}
