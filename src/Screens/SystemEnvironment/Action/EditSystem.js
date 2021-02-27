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
            ownerPartyId: systemContext.update.parameters.ownerPartyId,
         },
         { version: systemContext.update.parameters.version }
      )
         .then((response) => {
            systemContext.setUpdate((prevState) => ({
               ...prevState,
               isSubmit: false,
               data: response,
               parameters: { ...systemContext.update.parameters, name: '', description: '' },
            }))
            SystemController.updateAttachSystemEnvironment({
               system: {
                  name: systemContext.update.parameters.name,
                  description: systemContext.update.parameters.description,
               },
               attachments: environmentContext.selectingEnvironment,
            }).then(() => {
               environmentContext.setSelectingEnvironment([])
               systemContext.setIsSuccessSystem(true)
               systemContext.fetchSystem()
            })
         })
         .catch((err) => console.log(err))
   }

   const submit = (event) => {
      event.preventDefault()
      systemContext.setUpdate((prevState) => ({ ...prevState, isSubmit: true }))
      updateSystem()
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
                  {/* <Input
                     label='URL'
                     placeholder='https://'
                  /> */}
                  <Input label='System ID' placeholder='Environment ID' value={environmentContext.selectedEnvironment?.environmentId ?? ''} />
               </div>
            </form>
         </div>
         <div className='action__tab-upload'>
            <div className='action__attach-icon'>
               <Attachment />
            </div>
            <div className='action__upload'>
               <div className='action__upload-title text__sub-title'>Attach to Environment</div>
               {systemContext.system.items.length === 0 ? <div className='action__upload-empty text__action'>No Environment available</div> : <AttachSystem />}
            </div>
         </div>
         <div className='action__tab-btn'>
            <Button type='submit' label={systemContext.update.isSubmit ? 'Please wait...' : 'Update'} onClick={(event) => submit(event)} />
         </div>
      </div>
   )
}
