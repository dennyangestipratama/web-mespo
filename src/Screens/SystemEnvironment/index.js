import { Fragment, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import ModalSuccess from '@Components/ModalSuccess'
import ModalDelete from '@Components/ModalDelete'
import Button from '@Components/Button'

import Action from './Action'
import Main from './Main'

import { ReactComponent as CreateSystemSVG } from '@Icon/create-system.svg'
import { ReactComponent as CreateEnvironmentSVG } from '@Icon/create-environment.svg'

export default function SystemEnvironment() {
   const history = useHistory()
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)
   return (
      <Fragment>
         {/* FOR PAGE */}
         {!utilsContext.showAction ? null : <Action />}
         <Main />

         {/* FOR MODAL */}
         {!systemContext.isSuccessSystem ? null : (
            <ModalSuccess
               icon={<CreateSystemSVG />}
               title={systemContext.create.data?.event.system.name}
               text_title='System'
               text='is  successfully created !'
               desc='What do you want to do next?'
               button={
                  <Fragment>
                     <Button
                        onClick={() => {
                           systemContext.setIsSuccessSystem(false)
                           history.push('/system-environment/create/environment')
                           systemContext.fetchSystem()
                        }}
                        color='#000000'
                        border='1px solid #3776FF'
                        label='Add to Environment'
                     />
                     <Button
                        onClick={() => {
                           systemContext.setIsSuccessSystem(false)
                           history.push('/system-environment')
                        }}
                        label='Add a Property'
                     />
                  </Fragment>
               }
            />
         )}
         {!environmentContext.isSuccessEnvironment ? null : (
            <ModalSuccess
               icon={<CreateEnvironmentSVG />}
               title={environmentContext.create.data?.event.environment.name}
               text_title='Environment'
               text='is  successfully created !'
               desc='But it seems it doesn’t attach to any system. Do you want to create a system now?'
               button={
                  <Fragment>
                     <Button
                        onClick={() => {
                           environmentContext.setIsSuccessEnvironment(false)
                           history.push('/system-environment')
                        }}
                        color='#000000'
                        label='No'
                     />
                     <Button
                        onClick={() => {
                           environmentContext.setIsSuccessEnvironment(false)
                           history.push('/system-environment/create')
                           environmentContext.fetchEnvironment()
                        }}
                        label='Yes'
                     />
                  </Fragment>
               }
            />
         )}
         {!systemContext.showDelete ? null : (
            <ModalDelete
               title={systemContext.showDelete?.name}
               text='You are about to delete a system :'
               desc='To continue, type the system name below.'
               placeholder={systemContext.showDelete?.name}
               value={systemContext.deleteSystem.name}
               onChange={({ target: { value } }) => systemContext.setDeleteSystem((prevState) => ({ ...prevState, name: value }))}
               label={systemContext.deleteSystem.isSubmit ? 'Please wait...' : 'Delete System'}
               disabled={systemContext.deleteSystem.name !== systemContext.showDelete?.name}
               onClick={() => {
                  systemContext.setDeleteSystem((prevState) => ({ ...prevState, isSubmit: true }))
                  setTimeout(() => {
                     systemContext.deletingSystem(systemContext.showDelete?.systemId, { version: systemContext.showDelete?.version })
                     history.push('/system-environment')
                  }, 500)
               }}
            />
         )}
         {!environmentContext.showDelete ? null : (
            <ModalDelete
               title={environmentContext.showDelete?.name}
               text='You are about to delete a environment :'
               desc='To continue, type the environment name below.'
               placeholder={environmentContext.showDelete?.name}
               value={environmentContext.deleteEnvironment.name}
               onChange={({ target: { value } }) => environmentContext.setDeleteEnvironment((prevState) => ({ ...prevState, name: value }))}
               label={environmentContext.deleteEnvironment.isSubmit ? 'Please wait...' : 'Delete System'}
               disabled={environmentContext.deleteEnvironment.name !== environmentContext.showDelete?.name}
               onClick={() => {
                  environmentContext.setDeleteEnvironment((prevState) => ({ ...prevState, isSubmit: true }))
                  setTimeout(() => {
                     environmentContext.deletingEnvironment(environmentContext.showDelete?.environmentId, { version: environmentContext.showDelete?.version })
                     history.push('/system-environment')
                  }, 500)
               }}
            />
         )}
      </Fragment>
   )
}
