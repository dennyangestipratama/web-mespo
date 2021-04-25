import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import SystemController from '@Services/SystemController'

import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import AttachSystem from './AttachSystem'

import { ReactComponent as IconClose } from '@Icon/close.svg'
import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function EditSystem({ history }) {
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)
   const params = useParams()

   useEffect(() => {
      systemContext.fetchDetailSystem(params.id)
   }, [])

   const updateSystem = () => {
      SystemController.updateSystem(
         params.id,
         {
            name: systemContext.update.parameters.name,
            description: systemContext.update.parameters.description,
            systemId: systemContext.update.parameters.systemId,
            url: systemContext.update.parameters.url,
            ownerPartyId: systemContext.update.parameters.ownerPartyId,
         },
         { version: systemContext.update.parameters.version }
      )
         .then((response) => {
            systemContext
               .setUpdate((prevState) => ({
                  ...prevState,
                  isSubmit: false,
                  data: response,
               }))
               .then(() => {
                  environmentContext.setSelectingEnvironment([])
                  systemContext.setIsSuccessSystem(true)
                  systemContext.fetchSystem()
               })
         })
         .catch((err) => console.error(err))
   }

   const submit = (event) => {
      event.preventDefault()
      systemContext.setUpdate((prevState) => ({ ...prevState, isSubmit: true }))
      updateSystem()
   }

   const createEnvironmentButton = () => {
      systemContext.setIsSuccessSystem(false)
      history.push('/system-environment/create/environment')
      systemContext.fetchSystem()
   }

   const back = () => {
      systemContext.setIsSuccessSystem(false)
      history.push('/system-environment')
   }

   return (
      <div className='action__create'>
         <IconClose className='action__create-close' onClick={() => utilsContext.setShowAction(false)} />
         <div className='action__create-breadcrumbs text__breadcrumbs'>
            <span style={{ cursor: 'pointer' }} onClick={() => history.push('/system-environment')}>
               System List &gt;
            </span>
            <span>&nbsp; Update &gt;</span>
            <span>&nbsp; {systemContext.update.parameters.name}</span>
         </div>
         <div className='action__create-title text__sub-title'>Update {systemContext.update.parameters.name}</div>
         <div className='action__tab'>
            <form onSubmit={submit}>
               <div className='action__tab-form'>
                  <Input
                     label='System Name'
                     placeholder='System Name'
                     value={systemContext.update.parameters.name}
                     onChange={({ target: { value } }) =>
                        systemContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...systemContext.update.parameters, name: value } }))
                     }
                  />
                  <TextArea
                     isFocus={systemContext.update.parameters.description === '' ? false : true}
                     value={systemContext.update.parameters.description}
                     onChange={({ target: { value } }) =>
                        systemContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...systemContext.update.parameters, description: value } }))
                     }
                     label='System Description'
                     placeholder='Optional'
                  />
                  <Input
                     label='URL'
                     placeholder='https://'
                     value={systemContext.update.parameters.url}
                     onChange={({ target: { value } }) =>
                        systemContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...systemContext.update.parameters, url: value } }))
                     }
                  />
               </div>
            </form>
         </div>
         {systemContext.isSuccessSystem ? (
            <div className='action__tab-upload'>
               <div className='action__attach-icon'>
                  <Attachment />
               </div>
               <div className='action__upload'>
                  <div className='action__upload-title text__sub-title'>System Updated!</div>
                  <div className='action__upload-info text__sub-info'>Do you want to add it into an environment?</div>
               </div>
               {systemContext.system.items.length === 0 ? (
                  <div className='action__upload-empty text__action'>
                     <span style={{ marginBottom: 27, display: 'block' }}>No Environment available</span>
                     <Button type='submit' size='full' label='Create Environment' onClick={() => createEnvironmentButton()} />
                     <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='Not now' onClick={() => back()} />
                  </div>
               ) : (
                  <AttachSystem history={history} />
               )}
            </div>
         ) : (
            <div className='action__tab-btn'>
               <Button type='submit' size='full' label={systemContext.update.isSubmit ? 'Please wait...' : 'Update System'} onClick={(event) => submit(event)} />
            </div>
         )}
      </div>
   )
}
