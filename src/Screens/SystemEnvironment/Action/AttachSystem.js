import { useContext } from 'react'

import { EnvironmentContext } from '@Context/EnvironmentContext'
import Search from '@Components/Search'

import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CheckSVG } from '@Icon/check.svg'

export default function AttachSystem() {
   const environmentContext = useContext(EnvironmentContext)

   const selectingEnvironment = (item) => {
      if (environmentContext.selectingEnvironment.some((has) => has.aggregate.environment.environmentId === item.aggregate.environment.environmentId)) {
         environmentContext.setSelectingEnvironment(
            environmentContext.selectingEnvironment.filter((filter) => filter.aggregate.environment.environmentId !== item.aggregate.environment.environmentId)
         )
      } else {
         environmentContext.setSelectingEnvironment((selected) => [...selected, item])
      }
   }

   return (
      <div className='attach'>
         <Search placeholder={'Search Environment'} />
         {environmentContext.environment.items.map((item) => {
            const isActive = environmentContext.selectingEnvironment.some((has) => has.aggregate.environment.environmentId === item.environmentId)
            return (
               <div
                  className='attach__items'
                  key={item.environmentId}
                  onClick={() => {
                     selectingEnvironment({
                        aggregate: {
                           environment: {
                              environmentId: item.environmentId,
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
