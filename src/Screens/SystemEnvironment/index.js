import { Fragment, useContext } from 'react'

import { UtilsContext } from '@Context/UtilsContext'
import Action from './Action'
import Main from './Main'

export default function SystemEnvironment() {
   const utilsContext = useContext(UtilsContext)
   return (
      <Fragment>
         {!utilsContext.showAction ? null : <Action />}
         <Main />
      </Fragment>
   )
}
