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
            url: environmentContext.update.parameters.url,
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
            }))
            environmentContext.setIsSuccessEnvironment(true)
            environmentContext.fetchEnvironment()
         })
         .catch((err) => console.error(err))
   }

   const submit = (event) => {
      event.preventDefault()
      environmentContext.setUpdate((prevState) => ({ ...prevState, isSubmit: true }))
      updateEnvironment()
   }

   const createSystemButton = () => {
      systemContext.setIsSuccessSystem(false)
      history.push('/system-environment/create')
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
            <span>&nbsp; {environmentContext.update.parameters.name}</span>
         </div>
         <div className='action__create-title text__sub-title'>Update {environmentContext.update.parameters.name}</div>
         <div className='action__tab'>
            <form onSubmit={submit}>
               <div className='action__tab-form'>
                  <Input
                     label='Environment Name'
                     placeholder='Environment Name'
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
                     label='Environment Description'
                     placeholder='Optional'
                  />
                  <Input
                     label='URL'
                     placeholder='https://'
                     value={environmentContext.update.parameters.url}
                     onChange={({ target: { value } }) =>
                        environmentContext.setUpdate((prevState) => ({ ...prevState, parameters: { ...environmentContext.update.parameters, url: value } }))
                     }
                  />
               </div>
            </form>
         </div>
         {environmentContext.isSuccessEnvironment ? (
            <div className='action__tab-upload'>
               <div className='action__attach-icon'>
                  <Attachment />
               </div>
               <div className='action__upload'>
                  <div className='action__upload-title text__sub-title'>Environment Updated!</div>
                  <div className='action__upload-info text__sub-info'>Do you want to add it into a system?</div>
               </div>
               {environmentContext.environment.items.length === 0 ? (
                  <div className='action__upload-empty text__action'>
                     <span style={{ marginBottom: 27, display: 'block' }}>No System available</span>
                     <Button type='submit' size='full' label='Create System' onClick={() => createSystemButton()} />
                     <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='Not now' onClick={() => back()} />
                  </div>
               ) : (
                  <AttachEnvironment history={history} />
               )}
            </div>
         ) : (
            <div className='action__tab-btn'>
               <Button type='submit' size='full' label={environmentContext.update.isSubmit ? 'Please wait...' : 'Update Environment'} onClick={(event) => submit(event)} />
            </div>
         )}
      </div>
   )
}
