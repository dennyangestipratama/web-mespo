import { useContext } from 'react'

import { EnvironmentContext } from '@Context/EnvironmentContext'
import { SystemContext } from '@Context/SystemContext'
import Search from '@Components/Search'

import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CheckSVG } from '@Icon/check.svg'

export default function AttachSystem() {
   const environmentContext = useContext(EnvironmentContext)
   const systemContext = useContext(SystemContext)

   return (
      <div className='attach'>
         <Search placeholder={'Search Environment'} />
         {environmentContext.environment.items.map((item) => {
            const isActive = environmentContext.selectedEnvironment?.environmentId === item.environmentId
            return (
               <div
                  className='attach__items'
                  key={item.environmentId}
                  onClick={() => {
                     systemContext.setCreate((prevState) => ({ ...prevState, parameters: { ...systemContext.create.parameters, systemId: item.environmentId } }))
                     environmentContext.setSelectedEnvironment(item)
                  }}>
                  <div className='attach__items-action'>{isActive ? <CheckSVG /> : null}</div>
                  <div className={`attach__capsules text__capsules ${isActive ? 'attach__capsules--active' : ''}`}>
                     <span>{item.name}</span>
                     <MoreSVG />
                  </div>
               </div>
            )
         })}
      </div>
   )
}
