import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '@Screens/Login'
import Navigation from '@Layouts/Navigation'
import { UtilsContext } from '@Context/UtilsContext'

import Routes from './routes'

export default function App() {
   const utilsContext = useContext(UtilsContext)
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Login} />
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
