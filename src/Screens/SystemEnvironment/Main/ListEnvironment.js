import { Fragment, useContext, useEffect } from 'react'
import { NavLink, useParams, Link } from 'react-router-dom'

import ModalAction from '@Components/ModalAction'
import ButtonAction from '@Components/ButtonAction'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import { SystemContext } from '@Context/SystemContext'
import EmptyEnvironment from './EmptyEnvironment'

import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as IconMore } from '@Icon/more-vertical.svg'
import { ReactComponent as CloneSVG } from '@Icon/clone.svg'
import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'

export default function ListEnvironment({ history }) {
   const environmentContext = useContext(EnvironmentContext)
   const systemContext = useContext(SystemContext)
   const params = useParams()

   useEffect(() => {
      if (params.id) {
         systemContext.fetchSystemEnvironmentAttach(params.id)
      }
   }, [systemContext.selectedSystem])

   return systemContext.attachedEnvironment.isLoading ? null : systemContext.attachedEnvironment.items.attachments?.length <= 3 ? (
      <EmptyEnvironment history={history} />
   ) : (
      <Fragment>
         <NavLink
            exact
            to={`/system-environment/system/${systemContext.selectedSystem}`}
            className='main__environment-capsules text__capsules'
            activeClassName='main__environment-capsules--active'
            onClick={() => environmentContext.setSelectedEnvironment(null)}
            style={{ marginLeft: 16, paddingRight: 13 }}>
            All
         </NavLink>
         {systemContext.attachedEnvironment.items.attachments
            ?.filter((filter) => filter.status === 'ATTACHED')
            .map((item) => {
               return (
                  <NavLink
                     to={`/system-environment/system/${systemContext.selectedSystem}/env/${item.aggregate.environment.environmentId}`}
                     key={item.aggregate.environment.environmentId}
                     onClick={() => environmentContext.setSelectedEnvironment(item.aggregate.environment.environmentId)}
                     className='main__environment-capsules text__capsules'
                     activeClassName='main__environment-capsules--active'>
                     {item.aggregate.environment.name}
                     <IconMore onClick={() => environmentContext.setShowAction(item.aggregate.environment.environmentId)} />
                     {environmentContext.showAction !== item.aggregate.environment.environmentId ? null : (
                        <ModalAction
                           title='Env. Action'
                           onClick={() => environmentContext.setShowAction(null)}
                           button={
                              <Fragment>
                                 <ButtonAction label='Clone' icon={<CloneSVG />} />
                                 <Link to={`/system-environment/update/${params.id}/env/${params.envId}`}>
                                    <ButtonAction label='Edit' icon={<EditSVG />} onClick={() => environmentContext.setShowAction(null)} />
                                 </Link>
                                 <ButtonAction
                                    label='Delete'
                                    icon={<DeleteSVG />}
                                    theme='delete'
                                    onClick={() => {
                                       environmentContext.setShowDelete(item.aggregate.environment)
                                    }}
                                 />
                              </Fragment>
                           }
                        />
                     )}
                  </NavLink>
               )
            })}
         <IconAdd className='main__icon-add' onClick={() => history.push('/system-environment/create/environment')} />
      </Fragment>
   )
}
