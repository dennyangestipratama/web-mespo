import { Fragment, useContext, useEffect } from 'react'

import { UtilsContext } from '@Context/UtilsContext'
import Action from './Action'
import Main from './Main'

export default function People() {
   const utilsContext = useContext(UtilsContext)

   useEffect(() => {
      utilsContext.setShowAction(false)
   }, [])

   return (
      <Fragment>
         {/* FOR PAGE */}
         {!utilsContext.showAction ? null : <Action />}
         <Main />
      </Fragment>
   )
}
