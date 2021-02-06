import { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Search from '@Components/Search'
import ModalAction from '@Components/ModalAction'
import ButtonAction from '@Components/ButtonAction'

import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'

import { ReactComponent as Close } from '@Icon/close.svg'
import { ReactComponent as Add } from '@Icon/add.svg'
import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CloneSVG } from '@Icon/clone.svg'
import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'

export default function ListSystem() {
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)

   return (
      <div className='system-list'>
         <Close className='empty-action__close' onClick={() => utilsContext.setShowAction(false)} />
         <div className='system-list__title text__sub-title'>Select System :</div>
         <div className='system-list__search empty-action__search'>
            <Search placeholder={'Search System'} />
            <Link to={'/system-environment/create'}>
               <Add />
            </Link>
         </div>
         {systemContext.system.items.map((item) => {
            return (
               <Link
                  key={item.systemId}
                  to={`/system-environment/system/${item.systemId}`}
                  onClick={() => systemContext.setSelectedSystem(item.systemId)}
                  className={`system-list__capsules text__capsules ${systemContext.selectedSystem === item.systemId ? 'system-list__capsules--active' : ''}`}>
                  <span>{item.name}</span>
                  <MoreSVG className='system-list__capsules-icon' onClick={() => systemContext.setShowAction(item)} />
                  {systemContext.showAction?.systemId !== item.systemId ? null : (
                     <ModalAction
                        title='System Action'
                        onClick={() => systemContext.setShowAction(null)}
                        button={
                           <Fragment>
                              <ButtonAction label='Clone' icon={<CloneSVG />} />
                              <ButtonAction label='Edit' icon={<EditSVG />} />
                              <ButtonAction
                                 label='Delete'
                                 icon={<DeleteSVG />}
                                 theme='delete'
                                 onClick={() => {
                                    systemContext.setShowDelete(systemContext.showAction)
                                 }}
                              />
                           </Fragment>
                        }
                     />
                  )}
               </Link>
            )
         })}
      </div>
   )
}
