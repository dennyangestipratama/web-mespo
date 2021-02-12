import { useContext } from 'react'
import { UtilsContext } from '@Context/UtilsContext'

import { ReactComponent as IconWindow } from '@Icon/window.svg'
import { ReactComponent as ArrowLeft } from '@Icon/arrow-left.svg'

export default function EmptySystem() {
   const utilsContext = useContext(UtilsContext)
   return (
      <div className='main__header'>
         <div className='main__title text__title'>System</div>
         <div className='main__navigation text__navigation' onClick={() => utilsContext.setShowAction(!utilsContext.showAction)}>
            <ArrowLeft />
            <span>Select System</span>
         </div>
         <IconWindow className='main__window' onClick={() => utilsContext.setIsMini(!utilsContext.isMini)} />
      </div>
   )
}
