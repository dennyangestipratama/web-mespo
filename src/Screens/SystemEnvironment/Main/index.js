import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UtilsContext } from '@Context/UtilsContext'

import { ReactComponent as IconWindow } from '@Icon/window.svg'
import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as ArrowLeft } from '@Icon/arrow-left.svg'
import { ReactComponent as ArrowStraight } from '@Icon/arrow-straight.svg'

export default function Main() {
   const history = useHistory()
   const utilsContext = useContext(UtilsContext)

   return (
      <section className='main'>
         <div className='main__header'>
            <div className='main__title text__title'>System</div>
            <div className='main__navigation text__navigation' onClick={() => utilsContext.setShowAction(!utilsContext.showAction)}>
               <ArrowLeft />
               <span>Select System</span>
            </div>
            <IconWindow className='main__window' onClick={() => utilsContext.setIsMini(!utilsContext.isMini)} />
         </div>
         <div className='main__sub' onClick={() => history.push('/system-environment/create/environment')}>
            <div className='main__sub-title text__sub-title'>Environment</div>
            <IconAdd className='main__icon-add' />
            <ArrowStraight className='main__icon-arrow' />
            <div className='text__action'>or create environment first here.</div>
         </div>
      </section>
   )
}
