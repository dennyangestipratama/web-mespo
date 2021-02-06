import { useContext } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import TabEnvironment from './TabEnvironment'
import TabSystem from './TabSystem'

import { ReactComponent as IconClose } from '@Icon/close.svg'

export default function CreateSystem({ history }) {
   const utilsContext = useContext(UtilsContext)

   return (
      <div className='action__create'>
         <IconClose className='action__create-close' onClick={() => utilsContext.setShowAction(false)} />
         <div className='action__create-breadcrumbs text__breadcrumbs'>
            <span style={{ cursor: 'pointer' }} onClick={() => history.push('/system-environment')}>
               System List &gt;
            </span>
            <span>Create</span>
         </div>
         <div className='action__create-title text__sub-title'>Create</div>
         <div className='action__create-tabs'>
            <NavLink to='/system-environment/create' exact className='action__create-tab text__tabs' activeClassName='action__create-tab--active text__tabs--active'>
               <span>System</span>
            </NavLink>
            <NavLink to='/system-environment/create/environment' exact className='action__create-tab text__tabs' activeClassName='action__create-tab--active text__tabs--active'>
               <span>Environment</span>
            </NavLink>
         </div>
         <div className='action__create-body'>
            <Switch>
               <Route exact path='/system-environment/create'>
                  <TabSystem history={history} />
               </Route>
               <Route exact path='/system-environment/create/environment'>
                  <TabEnvironment history={history} />
               </Route>
            </Switch>
         </div>
      </div>
   )
}
