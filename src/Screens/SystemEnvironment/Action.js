import { Fragment, Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import ActionCreate from '@Screens/SystemEnvironment/Components/ActionCreate'
import ActionEmpty from '@Screens/SystemEnvironment/Components/ActionEmpty'
import ActionSystem from '@Screens/SystemEnvironment/Components/ActionSystem'

import { ReactComponent as IconClose } from '@Assets/Icon/close.svg'
import { ReactComponent as IconSearch } from '@Assets/Icon/search.svg'
import { ReactComponent as IconAdd } from '@Assets/Icon/add.svg'

export default class Action extends Component {
   render() {
      const { isClose, isNavigation, systems, setToggle, selectedSystem, showOption, showOptionSystem } = this.props
      const system = systems.filter((filter) => filter.ID === selectedSystem)

      return isClose || isNavigation ? null : (
         <div className='action'>
            <Switch>
               <Route
                  path='/system'
                  render={() => (
                     <Fragment>
                        <IconClose onClick={() => setToggle('isClose')} />
                        <div className='title'>Select System :</div>
                        <div className='action__search'>
                           <div className='wrapper'>
                              <input type='text' placeholder='Search System' />
                              <IconSearch />
                           </div>
                           <Link to='/create'>
                              <IconAdd />
                           </Link>
                        </div>
                        {systems.length === 0 ? <ActionEmpty /> : <ActionSystem {...this.props} showOptionSystem={showOptionSystem} showOption={showOption} setToggle={setToggle} systems={systems} />}
                     </Fragment>
                  )}
               />
               <Route path='/create' render={() => <ActionCreate setToggle={setToggle} />} />
            </Switch>
         </div>
      )
   }
}
