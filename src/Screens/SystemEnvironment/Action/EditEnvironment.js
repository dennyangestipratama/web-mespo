import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import EnvironmentController from '@Services/EnvironmentController'

import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import AttachEnvironment from './AttachEnvironment'

import { ReactComponent as IconClose } from '@Icon/close.svg'
import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function EditEnvironment({ history }) {
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)
   const params = useParams()

   useEffect(() => {
      environmentContext.fetchDetailEnvironment(params.envId)
   }, [])

   const updateEnvironment = () => {
      EnvironmentController.updateEnvironment(
         params.envId,
         {
            name: environmentContext.update.parameters.name,
            description: environmentContext.update.parameters.description,
            environmentId: environmentContext.update.parameters.environmentId,
            ownerPartyId: environmentContext.update.parameters.ownerPartyId,
         },
         { version: environmentContext.update.parameters.version }
      )
         .then((response) => {
            environmentContext.setUpdate((prevState) => ({
               ...prevState,
               isSubmit: false,
               data: response,
               parameters: { ...environmentContext.update.parameters, name: '', description: '' },
            }))
            environmentContext.setIsSuccessEnvironment(true)
            environmentContext.fetchEnvironment()
         })
         .catch((err) => console.log(err))
   }

   const submit = (event) => {
      event.preventDefault()
      environmentContext.setUpdate((prevState) => ({ ...prevState, isSubmit: true }))
      updateEnvironment()
   }

   return (
      <div className='action__create'>
         <IconClose className='action__create-close' onClick={() => utilsContext.setShowAction(false)} />
         <div className='action__create-breadcrumbs text__breadcrumbs'>
            <span style={{ cursor: 'pointer' }} onClick={() => history.push('/system-environment')}>
               System List &gt;
            </span>
            <span>&nbsp; Update &gt;</span>
            <span>&nbsp; {environmentContext.update.parameters.name}</span>
         </div>
         <div className='action__create-title text__sub-title'>Update {environmentContext.update.parameters.name}</div>
         <div className='action__tab'>
            <form onSubmit={submit}>
               <div className='action__tab-form'>
                  <Input
                     label='System Name'
                     placeholder='System Name'
                     value={environmentContext.update.parameters.name}
                     onChange={({ target: { value } }) =>
                        environmentContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...environmentContext.update.parameters, name: value } }))
                     }
                  />
                  <TextArea
                     isFocus={environmentContext.update.parameters.description === '' ? false : true}
                     value={environmentContext.update.parameters.description}
                     onChange={({ target: { value } }) =>
                        environmentContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...environmentContext.update.parameters, description: value } }))
                     }
                     label='System Description'
                     placeholder='Optional'
                  />
                  {/* <Input
                     label='URL'
                     placeholder='https://'
                  /> */}
                  <Input
                     label='Environment ID'
                     placeholder='System ID'
                     value={systemContext.selectedSystem?.systemId ?? ''}
                     onChange={({ target: { value } }) =>
                        environmentContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...environmentContext.update.parameters, environmentId: value } }))
                     }
                  />
               </div>
            </form>
         </div>
         <div className='action__tab-upload'>
            <div className='action__attach-icon'>
               <Attachment />
            </div>
            <div className='action__upload'>
               <div className='action__upload-title text__sub-title'>Attach to Environment</div>
               {systemContext.system.items.length === 0 ? <div className='action__upload-empty text__action'>No System available</div> : <AttachEnvironment />}
            </div>
         </div>
         <div className='action__tab-btn'>
            <Button type='submit' label={environmentContext.update.isSubmit ? 'Please wait...' : 'Update'} onClick={(event) => submit(event)} />
         </div>
      </div>
   )
}
