import { useState, useContext, Fragment } from 'react'

import Alert from '@Components/Alert'
import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import { SystemContext } from '@Context/SystemContext'

import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function TabEnvironment() {
   const systemContext = useContext(SystemContext)
   const [desc, setDesc] = useState('')

   return (
      <Fragment>
         <div className='action__tab'>
            <Alert label='You don’t have any Environment. Create your first one below.' />
            <form>
               <div className='action__tab-form'>
                  <Input label='Environment Name' placeholder='Environment Name' />
                  <TextArea isFocus={desc === '' ? false : true} value={desc} onChange={(e) => setDesc(e.target.value)} label='Environment Description' placeholder='Optional' />
                  <Input label='URL' placeholder='https://' />
                  <Input label='Environment ID' placeholder='System ID' />
               </div>
            </form>
         </div>
         <div className='action__tab-upload'>
            <div className='action__attach-icon'>
               <Attachment />
            </div>
            <div className='action__upload'>
               <div className='action__upload-title text__sub-title'>Attach to System</div>
               {systemContext.system.items.length === 0 ? <div className='action__upload-empty text__action'>No System available</div> : <div>halo</div>}
            </div>
         </div>
         <div className='action__tab-btn'>
            <Button type='submit' label='Create' />
         </div>
      </Fragment>
   )
}
