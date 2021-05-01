import React, { useContext } from 'react'

import { EnvironmentContext } from '@Context/EnvironmentContext'
import { SystemContext } from '@Context/SystemContext'
import SystemController from '@Services/SystemController'
import Search from '@Components/Search'
import Button from '@Components/Button'

import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CheckSVG } from '@Icon/check.svg'

export default function AttachEnvironment({ history }) {
   const environmentContext = useContext(EnvironmentContext)
   const systemContext = useContext(SystemContext)

   const submit = () => {
      return new Promise((resolve, reject) => {
         let finalArr = []
         let arr = systemContext.selectingSystem.map((item) => finalArr.push(item))
         for (let i = 0; i < arr.length; i++) {
            SystemController.attachSystemEnvironment({
               environmentId: environmentContext.create.data.event.environment.environmentId,
               systemId: finalArr[i].toString(),
            })
               .then(() => {
                  environmentContext.setCreate(() => ({
                     isSubmit: false,
                     data: null,
                     parameters: {
                        name: '',
                        description: '',
                        environmentId: '',
                        url: '',
                     },
                  }))
               })
               .catch((error) => {
                  console.error('error:', error)
               })
         }
         resolve()
      })
   }

   const search = (event) => {
      event.preventDefault()
      SystemController.searchSystem(systemContext.search.parameters).then((response) => {
         systemContext.setSystem((prevState) => ({ ...prevState, items: response }))
      })
   }

   return (
      <React.Fragment>
         <div className='attach'>
            <Search
               placeholder={'Search System'}
               value={systemContext.search.parameters.q}
               onChange={({ target: { value } }) => systemContext.setSearch((prevState) => ({ ...prevState, parameters: { ...systemContext.search.parameters, q: value } }))}
               onSubmit={search}
            />
            {systemContext.system.items.map((item) => {
               const isActive = systemContext.selectingSystem.some((has) => has === item.systemId)
               const toggle = (isActive) => {
                  if (isActive) {
                     systemContext.setSelectingSystem(systemContext.selectingSystem.filter((filtered) => filtered !== item.systemId))
                  } else {
                     systemContext.setSelectingSystem(systemContext.selectingSystem.concat(item.systemId))
                  }
               }

               return (
                  <div className='attach__items' key={item.systemId} onClick={() => toggle(isActive)}>
                     <div className='attach__items-action'>{isActive ? <CheckSVG /> : null}</div>
                     <div className={`attach__capsules text__capsules ${isActive ? 'attach__capsules--active' : ''}`}>
                        <span>{item.name}</span>
                        <MoreSVG />
                     </div>
                  </div>
               )
            })}
         </div>
         <div className='attach-skip'>
            {systemContext.selectingSystem.length === 0 ? (
               <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='Skip for now' onClick={() => history.push('/system-environment')} />
            ) : (
               <Button
                  type='submit'
                  size='full'
                  label='Add to System'
                  onClick={() => {
                     submit()
                     environmentContext.setIsSuccessEnvironment(false)
                     systemContext.setSelectingSystem([])
                     history.push('/system-environment')
                  }}
               />
            )}
         </div>
      </React.Fragment>
   )
}
