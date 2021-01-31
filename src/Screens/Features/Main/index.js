import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UtilsContext } from '@Context/UtilsContext'

import { ReactComponent as IconWindow } from '@Icon/window.svg'
import { ReactComponent as ArrowLeft } from '@Icon/arrow-left.svg'

export default function Main() {
   const history = useHistory()
   const utilsContext = useContext(UtilsContext)

   return (
      <section className='main'>
         <div className='main__header'>
            <div className='main__title text__title'>Feature</div>
            <div className='main__navigation text__navigation' onClick={() => utilsContext.setShowAction(!utilsContext.showAction)}>
               <ArrowLeft />
               <span>Select Feature</span>
            </div>
            <IconWindow className='main__window' onClick={() => utilsContext.setIsMini(!utilsContext.isMini)} />
         </div>
         <div className='main__sub' onClick={() => history.push('/system-environment/environment')}>
            <div className='main__sub-title text__sub-title'>Filter</div>
         </div>
      </section>
   )
}
