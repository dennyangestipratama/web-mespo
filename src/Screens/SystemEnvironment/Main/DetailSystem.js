import { useContext } from 'react'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'

import { ReactComponent as IconWindow } from '@Icon/window.svg'
import { ReactComponent as IconCopy } from '@Icon/copy.svg'
import { ReactComponent as ArrowLeft } from '@Icon/arrow-left.svg'

export default function DetailSystem() {
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)
   const system = systemContext.detailSystem.data

   return (
      <div className='main__header main__header-detail'>
         <div style={{ paddingTop: 40, paddingBottom: 25, paddingLeft: 28, paddingRight: 28 }}>
            <div className='main__title text__title'>System</div>
            <div className='main__navigation text__navigation' onClick={() => utilsContext.setShowAction(!utilsContext.showAction)}>
               <ArrowLeft />
               <span style={{ color: '#50E4A7' }}>{system.name}</span>
            </div>
         </div>
         <div className='main__navigation-wrapper first'>
            <div className='main__title text__title'>Description</div>
            <div className='main__navigation-detail text__navigation-detail'>{system.description === '' || !system.description ? 'No Description' : system.description}</div>
         </div>
         <div className='main__navigation-wrapper'>
            <div className='main__title text__title'>System ID</div>
            <div className='main__navigation-detail text__navigation-detail'>
               {system.systemId}
               <button
                  onClick={() => {
                     navigator.clipboard.writeText(system.systemId)
                  }}>
                  <IconCopy />
                  <span>Copy</span>
               </button>
            </div>
         </div>
         <IconWindow className='main__window' onClick={() => utilsContext.setIsMini(!utilsContext.isMini)} />
      </div>
   )
}
