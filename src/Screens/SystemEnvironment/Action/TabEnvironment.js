import { useState, useContext, Fragment } from 'react'

import Alert from '@Components/Alert'
import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import EnvironmentController from '@Services/EnvironmentController'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import AttachEnvironment from './AttachEnvironment'

import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function TabEnvironment() {
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)

   const createEnvironment = () => {
      if (systemContext.selectingSystem.length === 0) {
         EnvironmentController.createEnvironment(environmentContext.create.parameters).then((response) => {
            environmentContext.setCreate((prevState) => ({
               ...prevState,
               isSubmit: false,
               data: response,
               parameters: { ...environmentContext.create.parameters, name: '', description: '', environmentId: '' },
            }))
            environmentContext.fetchEnvironment()
            environmentContext.setIsSuccessEnvironment(true)
         }).catch((err) => console.log(err))
      } else {
         EnvironmentController.attachEnvironmentSystem({
            environment: {
               name: environmentContext.create.parameters.name,
               description: environmentContext.create.parameters.description,
            },
            attachments: systemContext.selectingSystem,
         }).then(() => {
            environmentContext.setCreate((prevState) => ({
               ...prevState,
               isSubmit: false,
               parameters: { ...systemContext.create.parameters, name: '', description: '', environmentId: '' },
            }))
            systemContext.setSelectingSystem([])
            environmentContext.setIsSuccessEnvironment(true)
            environmentContext.fetchEnvironment()
         })
      }
   }

   console.log(systemContext.selectingSystem.length)

   const submit = (event) => {
      event.preventDefault()
      environmentContext.setCreate((prevState) => ({ ...prevState, isSubmit: true }))
      createEnvironment()
   }

   return (
      <Fragment>
         <div className='action__tab'>
            <Alert label='You don’t have any Environment. Create your first one below.' />
            <form onSubmit={submit}>
               <div className='action__tab-form'>
                  <Input
                     label='Environment Name'
                     placeholder='Environment Name'
                     value={environmentContext.create.parameters.name}
                     onChange={({ target: { value } }) =>
                        environmentContext.setCreate((prevState) => ({ ...prevState, parameters: { ...environmentContext.create.parameters, name: value } }))
                     }
                  />
                  <TextArea
                     isFocus={environmentContext.create.parameters.description === '' ? false : true}
                     value={environmentContext.create.parameters.description}
                     onChange={({ target: { value } }) =>
                        environmentContext.setCreate((prevState) => ({ ...prevState, parameters: { ...environmentContext.create.parameters, description: value } }))
                     }
                     label='Environment Description'
                     placeholder='Optional'
                  />
                  {/* <Input
                     label='URL'
                     placeholder='https://'
                  /> */}
                  <Input label='Environment ID' placeholder='System ID' value={systemContext.selectedSystem?.systemId ?? ''} />
               </div>
            </form>
         </div>
         <div className='action__tab-upload'>
            <div className='action__attach-icon'>
               <Attachment />
            </div>
            <div className='action__upload'>
               <div className='action__upload-title text__sub-title'>Attach to System</div>
               {systemContext.system.items.length === 0 ? <div className='action__upload-empty text__action'>No System available</div> : <AttachEnvironment />}
            </div>
         </div>
         <div className='action__tab-btn'>
            <Button type='submit' label={environmentContext.create.isSubmit ? 'Please wait...' : 'Create'} onClick={(event) => submit(event)} />
         </div>
      </Fragment>
   )
}
