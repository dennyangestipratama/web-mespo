import { Fragment, Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import ActionEmpty from '@Screens/Features/Components/ActionEmpty'

import { ReactComponent as IconClose } from '@Icon/close.svg'
import { ReactComponent as IconSearch } from '@Icon/search.svg'
import { ReactComponent as IconAdd } from '@Icon/add.svg'

export default class Action extends Component {
   render() {
      const { isClose, isNavigation, systems, setToggle, setType, selectedSystem, showOption, showOptionSystem } = this.props
      const system = systems.filter((filter) => filter.ID === selectedSystem)

      return (
         <div className='action'>
            <Switch>
               <Route
                  path='/features'
                  render={() => (
                     <Fragment>
                        <IconClose onClick={() => setToggle('isClose')} />
                        <div className='title'>Select Feature :</div>
                        <div className='action__search'>
                           <div className='wrapper'>
                              <input type='text' placeholder='Search Feature' />
                              <IconSearch />
                           </div>
                           <IconAdd />
                        </div>
                        <ActionEmpty />
                     </Fragment>
                  )}
               />
            </Switch>
         </div>
      )
   }
}
