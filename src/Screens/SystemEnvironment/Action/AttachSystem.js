import React, { useContext } from 'react'

import { EnvironmentContext } from '@Context/EnvironmentContext'
import { SystemContext } from '@Context/SystemContext'
import SystemController from '@Services/SystemController'
import Search from '@Components/Search'
import Button from '@Components/Button'

import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CheckSVG } from '@Icon/check.svg'

export default function AttachSystem({ history }) {
   const environmentContext = useContext(EnvironmentContext)
   const systemContext = useContext(SystemContext)

   const submit = () => {
      return new Promise((resolve, reject) => {
         let finalArr = []
         let arr = environmentContext.selectingEnvironment.map((item) => finalArr.push(item))
         for (let i = 0; i < arr.length; i++) {
            SystemController.attachSystemEnvironment({
               environmentId: finalArr[i].toString(),
               systemId: systemContext.create.data.event.system.systemId,
            })
               .then(() => {
                  systemContext.setCreate(() => ({
                     isSubmit: false,
                     data: null,
                     parameters: {
                        name: '',
                        description: '',
                        systemId: null,
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

   return (
      <React.Fragment>
         <div className='attach'>
            <Search placeholder='Search Environment' />
            {environmentContext.environment.items.map((item) => {
               const isActive = environmentContext.selectingEnvironment.some((has) => has === item.environmentId)
               const toggle = (isActive) => {
                  if (isActive) {
                     environmentContext.setSelectingEnvironment(environmentContext.selectingEnvironment.filter((filtered) => filtered !== item.environmentId))
                  } else {
                     environmentContext.setSelectingEnvironment(environmentContext.selectingEnvironment.concat(item.environmentId))
                  }
               }

               return (
                  <div className='attach__items' key={item.environmentId} onClick={() => toggle(isActive)}>
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
            {environmentContext.selectingEnvironment.length === 0 ? (
               <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='Skip for now' onClick={() => history.push('/system-environment')} />
            ) : (
               <Button
                  type='submit'
                  size='full'
                  label='Add to Environment'
                  onClick={() => {
                     submit()
                     systemContext.setIsSuccessSystem(false)
                     environmentContext.setSelectingEnvironment([])
                     history.push('/system-environment')
                  }}
               />
            )}
         </div>
      </React.Fragment>
   )
}
