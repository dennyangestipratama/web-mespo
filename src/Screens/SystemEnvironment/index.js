import { Fragment, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'
import ModalSuccess from '@Components/ModalSuccess'
import Button from '@Components/Button'

import Action from './Action'
import Main from './Main'

import { ReactComponent as CreateSystemSVG } from '@Icon/create-system.svg'

export default function SystemEnvironment() {
   const history = useHistory()
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)

   useEffect(() => {
      console.log(systemContext.create.isSubmit)
   }, [systemContext.system.isLoading])

   return (
      <Fragment>
         {/* FOR PAGE */}
         {!utilsContext.showAction ? null : <Action />}
         <Main />

         {/* FOR MODAL */}
         {!utilsContext.isSuccessSystem ? null : (
            <ModalSuccess
               icon={<CreateSystemSVG />}
               title={systemContext.create.data?.event.system.name}
               text_title='System'
               text='is  successfully created !'
               desc='But it seems it doesn’t attach to any environment. Do you want to create an environment now?'
               button={
                  <Fragment>
                     <Button
                        onClick={() => {
                           utilsContext.setIsSuccessSystem(false)
                           history.push('/system-environment')
                        }}
                        color='#000000'
                        label='No'
                     />
                     <Button
                        onClick={() => {
                           utilsContext.setIsSuccessSystem(false)
                           history.push('/system-environment/create/environment')
                        }}
                        label='Yes'
                     />
                  </Fragment>
               }
            />
         )}
      </Fragment>
   )
}
