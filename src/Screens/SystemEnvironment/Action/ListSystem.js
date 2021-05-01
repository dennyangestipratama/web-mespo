import { useContext, Fragment } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

import Search from '@Components/Search'
import ModalAction from '@Components/ModalAction'
import ButtonAction from '@Components/ButtonAction'

import SystemController from '@Services/SystemController'
import { UtilsContext } from '@Context/UtilsContext'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'

import { ReactComponent as Close } from '@Icon/close.svg'
import { ReactComponent as Add } from '@Icon/add.svg'
import { ReactComponent as MoreSVG } from '@Icon/more-vertical.svg'
import { ReactComponent as CloneSVG } from '@Icon/clone.svg'
import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'

export default function ListSystem({ history }) {
   const utilsContext = useContext(UtilsContext)
   const systemContext = useContext(SystemContext)
   const environmentContext = useContext(EnvironmentContext)
   const params = useParams()

   const search = (event) => {
      event.preventDefault()
      SystemController.searchSystem(systemContext.search.parameters).then((response) => {
         systemContext.setSystem((prevState) => ({ ...prevState, items: response }))
      })
   }

   return (
      <div className='system-list'>
         <Close className='empty-action__close' onClick={() => utilsContext.setShowAction(false)} />
         <div className='system-list__title text__sub-title'>Select System :</div>
         <div className='system-list__search empty-action__search'>
            <Search
               placeholder={'Search System'}
               value={systemContext.search.parameters.q}
               onChange={({ target: { value } }) => systemContext.setSearch((prevState) => ({ ...prevState, parameters: { ...systemContext.search.parameters, q: value } }))}
               onSubmit={search}
            />
            <Link to={'/system-environment/create'}>
               <Add />
            </Link>
         </div>
         {systemContext.system.items.map((item) => {
            return (
               <NavLink
                  key={item.systemId}
                  to={`/system-environment/system/${item.systemId}`}
                  onClick={() => {
                     systemContext.setSelectedSystem(item.systemId)
                     environmentContext.setSelectedEnvironment(null)
                  }}
                  activeClassName='system-list__capsules--active'
                  className='system-list__capsules text__capsules'>
                  <span>{item.name}</span>
                  <MoreSVG className='system-list__capsules-icon' onClick={() => systemContext.setShowAction(item)} />
                  {systemContext.showAction?.systemId !== item.systemId ? null : (
                     <ModalAction
                        title='System Action'
                        onClick={() => systemContext.setShowAction(null)}
                        button={
                           <Fragment>
                              <ButtonAction label='Clone' icon={<CloneSVG />} />
                              <Link to={`/system-environment/update/${params.id}`}>
                                 <ButtonAction label='Edit' icon={<EditSVG />} />
                              </Link>
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
               </NavLink>
            )
         })}
      </div>
   )
}
