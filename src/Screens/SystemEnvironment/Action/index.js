import { useContext } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { SystemContext } from '@Context/SystemContext'
import EmptyAction from '@Components/EmptyAction'

import CreateSystem from './CreateSystem'

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
                  <div>halo</div>
               )}
            </Route>
            <Route path='/system-environment/create'>
               <CreateSystem history={history} />
            </Route>
         </Switch>
      </section>
   )
}
