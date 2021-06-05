import { Fragment, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import ModalDelete from '@Components/ModalDelete'
import ModalLogout from '@Components/ModalLogout'

import Action from './Action'
import Main from './Main'

export default function SystemEnvironment() {
   const history = useHistory()
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)

   useEffect(() => {
      utilsContext.setShowAction(true)
   }, [])

   return (
      <Fragment>
         {/* FOR PAGE */}
         {!utilsContext.showAction ? null : <Action />}
         <Main />

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
               onClose={() => systemContext.setShowDelete(false)}
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
               label={environmentContext.deleteEnvironment.isSubmit ? 'Please wait...' : 'Delete Environment'}
               disabled={environmentContext.deleteEnvironment.name !== environmentContext.showDelete?.name}
               onClose={() => environmentContext.setShowDelete(false)}
               onClick={() => {
                  environmentContext.setDeleteEnvironment((prevState) => ({ ...prevState, isSubmit: true }))
                  setTimeout(() => {
                     environmentContext.deletingEnvironment(environmentContext.showDelete?.environmentId, { version: environmentContext.showDelete?.version })
                     history.push('/system-environment')
                  }, 500)
               }}
            />
         )}

         {!utilsContext.showLogout ? null : (
            <ModalLogout
               onClickYes={() => {
                  utilsContext.setShowLogout(false)
                  history.push('/')
               }}
               onClickNo={() => {
                  utilsContext.setShowLogout(false)
               }}
            />
         )}
      </Fragment>
   )
}
