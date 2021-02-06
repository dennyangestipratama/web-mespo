import { useContext, Fragment } from 'react'

import Alert from '@Components/Alert'
import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import SystemController from '@Services/SystemController'
import { SystemContext } from '@Context/SystemContext'

import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function TabSystem({ history }) {
   const systemContext = useContext(SystemContext)

   const createSystem = () => {
      SystemController.createSystem(systemContext.create.parameters).then((response) => {
         systemContext.setCreate((prevState) => ({
            ...prevState,
            isSubmit: false,
            data: response,
            parameters: { ...systemContext.create.parameters, name: '', description: '', systemId: '' },
         }))
         systemContext.setIsSuccessSystem(true)
         systemContext.fetchSystem()
      })
   }

   const submit = (event) => {
      event.preventDefault()
      systemContext.setCreate((prevState) => ({ ...prevState, isSubmit: true }))
      createSystem()
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
                  {/* <Input
                     label='URL'
                     placeholder='https://'
                  />
                  <Input
                     label='System ID'
                     placeholder='Environment ID'
                  /> */}
               </div>
            </form>
         </div>
         <div className='action__tab-upload'>
            <div className='action__attach-icon'>
               <Attachment />
            </div>
            <div className='action__upload'>
               <div className='action__upload-title text__sub-title'>Attach to Environment</div>
               {systemContext.system.items.length !== 0 ? <div className='action__upload-empty text__action'>No Environment available</div> : <div>halo</div>}
            </div>
         </div>
         <div className='action__tab-btn'>
            <Button type='submit' label={systemContext.create.isSubmit ? 'Please wait...' : 'Create'} onClick={(event) => submit(event)} />
         </div>
      </Fragment>
   )
}
