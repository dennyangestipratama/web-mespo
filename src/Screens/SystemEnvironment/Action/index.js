import { useContext } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { SystemContext } from '@Context/SystemContext'
import EmptyAction from '@Components/EmptyAction'

import CreateSystem from './CreateSystem'
import EditSystem from './EditSystem'
import EditEnvironment from './EditEnvironment'
import ListSystem from './ListSystem'

import Ghost from '@Image/ghost.png'

export default function Action() {
   const history = useHistory()
   const systemContext = useContext(SystemContext)
   return (
      <section className='action'>
         <Switch>
            <Route exact path='/system-environment'>
               {!systemContext.system.isLoading && systemContext.system.items.length === 0 ? (
                  <EmptyAction
                     src={Ghost}
                     content='Add your system to shoo away the boo-boo!'
                     label='Add a system here'
                     placeholder='Search System'
                     to='/system-environment/create'
                  />
               ) : (
                  <ListSystem history={history} />
               )}
            </Route>
            <Route exact path='/system-environment/system/:id'>
               <ListSystem history={history} />
            </Route>
            <Route exact path='/system-environment/system/:id/env/:envId'>
               <ListSystem history={history} />
            </Route>
            <Route path='/system-environment/create'>
               <CreateSystem history={history} />
            </Route>
            <Route path='/system-environment/update/:id/env/:envId'>
               <EditEnvironment history={history} />
            </Route>
            <Route path='/system-environment/update/:id'>
               <EditSystem history={history} />
            </Route>
         </Switch>
      </section>
   )
}
