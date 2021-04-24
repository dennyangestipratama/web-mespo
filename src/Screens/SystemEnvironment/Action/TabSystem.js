import { useContext, Fragment } from 'react'

import Alert from '@Components/Alert'
import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import SystemController from '@Services/SystemController'
import { SystemContext } from '@Context/SystemContext'
import AttachSystem from './AttachSystem'

import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function TabSystem({ history }) {
   const systemContext = useContext(SystemContext)

   const createSystem = () => {
      SystemController.createSystem(systemContext.create.parameters)
         .then((response) => {
            systemContext.setCreate((prevState) => ({
               ...prevState,
               isSubmit: false,
               data: response,
            }))
            systemContext.setIsSuccessSystem(true)
            systemContext.fetchSystem()
         })
         .catch((err) => console.error(err))
   }

   const submit = (event) => {
      event.preventDefault()
      systemContext.setCreate((prevState) => ({ ...prevState, isSubmit: true }))
      createSystem()
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
      <Fragment>
         <div className='action__tab'>
            <Alert label='You don’t have any System. Create your first one below.' />
            <form onSubmit={submit}>
               <div className='action__tab-form'>
                  <Input
                     label='System Name'
                     placeholder='System Name'
                     value={systemContext.create.parameters.name}
                     onChange={({ target: { value } }) =>
                        systemContext.setCreate((prevState) => ({ ...prevState, parameters: { ...systemContext.create.parameters, name: value } }))
                     }
                  />
                  <TextArea
                     isFocus={systemContext.create.parameters.description === '' ? false : true}
                     value={systemContext.create.parameters.description}
                     onChange={({ target: { value } }) =>
                        systemContext.setCreate((prevState) => ({ ...prevState, parameters: { ...systemContext.create.parameters, description: value } }))
                     }
                     label='System Description'
                     placeholder='Optional'
                  />
                  <Input
                     label='URL'
                     placeholder='https://'
                     value={systemContext.create.parameters.url}
                     onChange={({ target: { value } }) =>
                        systemContext.setCreate((prevState) => ({ ...prevState, parameters: { ...systemContext.create.parameters, url: value } }))
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
                  <div className='action__upload-title text__sub-title'>System Created!</div>
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
               <Button type='submit' size='full' label={systemContext.create.isSubmit ? 'Please wait...' : 'Create System'} onClick={(event) => submit(event)} />
            </div>
         )}
      </Fragment>
   )
}
