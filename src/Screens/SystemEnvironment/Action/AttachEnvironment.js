import { useContext } from 'react'

import { SystemContext } from '@Context/SystemContext'
import Search from '@Components/Search'

import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CheckSVG } from '@Icon/check.svg'

export default function AttachEnvironment() {
   const systemContext = useContext(SystemContext)

   const selectingSystem = (item) => {
      if (systemContext.selectingSystem.some((has) => has.aggregate.system.systemId === item.aggregate.system.systemId)) {
         systemContext.setSelectingSystem(
            systemContext.selectingSystem.filter((filter) => filter.aggregate.system.systemId !== item.aggregate.system.systemId)
         )
      } else {
         systemContext.setSelectingSystem((selected) => [...selected, item])
      }
   }

   return (
      <div className='attach'>
         <Search placeholder={'Search System'} />
         {systemContext.system.items.map((item) => {
            const isActive = systemContext.selectingSystem.some((has) => has.aggregate.system.systemId === item.systemId)
            return (
               <div
                  className='attach__items'
                  key={item.systemId}
                  onClick={() => {
                     selectingSystem({
                        aggregate: {
                           system: {
                              systemId: item.systemId,
                           },
                        },
                        status: 'ATTACHED',
                     })
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
