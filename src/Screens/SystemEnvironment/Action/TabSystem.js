import { useState, useContext, Fragment } from 'react'

import Alert from '@Components/Alert'
import Input from '@Components/Input'
import TextArea from '@Components/TextArea'
import Button from '@Components/Button'
import { SystemContext } from '@Context/SystemContext'

import { ReactComponent as Attachment } from '@Icon/attachment.svg'

export default function TabSystem() {
   const systemContext = useContext(SystemContext)
   const [desc, setDesc] = useState('')

   return (
      <Fragment>
         <div className='action__tab'>
            <Alert label='You don’t have any System. Create your first one below.' />
            <form>
               <div className='action__tab-form'>
                  <Input label='System Name' placeholder='System Name' />
                  <TextArea isFocus={desc === '' ? false : true} value={desc} onChange={(e) => setDesc(e.target.value)} label='System Description' placeholder='Optional' />
                  <Input label='URL' placeholder='https://' />
                  <Input label='System ID' placeholder='Environment ID' />
               </div>
            </form>
         </div>
         <div className='action__tab-upload'>
            <div className='action__attach-icon'>
               <Attachment />
            </div>
            <div className='action__upload'>
               <div className='action__upload-title text__sub-title'>Attach to Environment</div>
               {systemContext.system.items.length === 0 ? <div className='action__upload-empty text__action'>No Environment available</div> : <div>halo</div>}
            </div>
         </div>
         <div className='action__tab-btn'>
            <Button type='submit' label='Create' />
         </div>
      </Fragment>
   )
}
