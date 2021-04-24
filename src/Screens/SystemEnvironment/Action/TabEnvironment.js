import { useContext, Fragment } from 'react'

import Alert from '@Components/Alert'
import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import EnvironmentController from '@Services/EnvironmentController'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import AttachEnvironment from './AttachEnvironment'

import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function TabEnvironment({ history }) {
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)

   const createEnvironment = () => {
      EnvironmentController.createEnvironment(environmentContext.create.parameters)
         .then((response) => {
            environmentContext.setCreate((prevState) => ({
               ...prevState,
               isSubmit: false,
               data: response,
            }))
            environmentContext.fetchEnvironment()
            environmentContext.setIsSuccessEnvironment(true)
         })
         .catch((err) => console.log(err))
   }

   const submit = (event) => {
      event.preventDefault()
      environmentContext.setCreate((prevState) => ({ ...prevState, isSubmit: true }))
      createEnvironment()
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
                  <Input
                     label='URL'
                     placeholder='https://'
                     value={environmentContext.create.parameters.url}
                     onChange={({ target: { value } }) =>
                        environmentContext.setCreate((prevState) => ({ ...prevState, parameters: { ...environmentContext.create.parameters, url: value } }))
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
                  <div className='action__upload-title text__sub-title'>Environment Created!</div>
                  <div className='action__upload-info text__sub-info'>Do you want to add it into a system?</div>
               </div>
               {environmentContext.environment.items.length === 0 ? (
                  <div className='action__upload-empty text__action'>
                     <span style={{ marginBottom: 27, display: 'block' }}>No System available</span>
                     <Button type='submit' full label='Create System' onClick={() => createSystemButton()} />
                     <Button type='submit' full color='transparent' border='1px solid #3776FF' label='Not now' onClick={() => back()} />
                  </div>
               ) : (
                  <AttachEnvironment history={history} />
               )}
            </div>
         ) : (
            <div className='action__tab-btn'>
               <Button type='submit' full label={environmentContext.create.isSubmit ? 'Please wait...' : 'Create Environment'} onClick={(event) => submit(event)} />
            </div>
         )}
      </Fragment>
   )
}
