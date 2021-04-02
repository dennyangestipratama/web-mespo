import { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import ListEnvironment from './ListEnvironment'
import DetailSystem from './DetailSystem'
import EmptyEnvironment from './EmptyEnvironment'
import EmptySystem from './EmptySystem'
import Properties from './Properties'

export default function Main() {
   const history = useHistory()
   const params = useParams()
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)
   const system = systemContext.detailSystem.data

   useEffect(() => {
      if (systemContext.detailSystem.data?.systemId !== params.id || systemContext.selectedSystem) {
         systemContext.fetchDetailSystem(params.id)
      }
   }, [systemContext.selectedSystem])

   return (
      <section className='main'>
         {!system ? <EmptySystem /> : <DetailSystem />}
         {/* <div className='main__sub'>
            <div className='main__sub-title text__sub-title'>Environment</div>
            {environmentContext.environment.items.length === 0 ? <EmptyEnvironment history={history} /> : <ListEnvironment history={history} />}
         </div> */}
         <Properties />
      </section>
   )
}
