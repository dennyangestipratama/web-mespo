import { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import ModalAction from '@Components/ModalAction'
import ButtonAction from '@Components/ButtonAction'
import { EnvironmentContext } from '@Context/EnvironmentContext'
import { SystemContext } from '@Context/SystemContext'

import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as IconMore } from '@Icon/more-vertical.svg'
import { ReactComponent as CloneSVG } from '@Icon/clone.svg'
import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'

export default function ListEnvironment({ history }) {
   const environmentContext = useContext(EnvironmentContext)
   const systemContext = useContext(SystemContext)

   return (
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
         {environmentContext.environment.items.map((item) => {
            return (
               <NavLink
                  to={`/system-environment/system/${systemContext.selectedSystem}/env/${item.environmentId}`}
                  key={item.environmentId}
                  onClick={() => environmentContext.setSelectedEnvironment(item.environmentId)}
                  className='main__environment-capsules text__capsules'
                  activeClassName='main__environment-capsules--active'>
                  {item.name}
                  <IconMore onClick={() => environmentContext.setShowAction(item)} />
                  {environmentContext.showAction?.environmentId !== item.environmentId ? null : (
                     <ModalAction
                        title='Env. Action'
                        onClick={() => environmentContext.setShowAction(null)}
                        button={
                           <Fragment>
                              <ButtonAction label='Clone' icon={<CloneSVG />} />
                              <ButtonAction label='Edit' icon={<EditSVG />} />
                              <ButtonAction
                                 label='Delete'
                                 icon={<DeleteSVG />}
                                 theme='delete'
                                 onClick={() => {
                                    environmentContext.setShowDelete(environmentContext.showAction)
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
