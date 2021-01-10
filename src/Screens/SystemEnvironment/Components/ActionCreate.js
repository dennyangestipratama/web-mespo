import { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import TabEnvironment from '@Screens/SystemEnvironment/Components/TabEnvironment'
import TabSystem from '@Screens/SystemEnvironment/Components/TabSystem'

import { ReactComponent as IconClose } from '@Icon/close.svg'

export default class ActionCreate extends Component {
   render() {
      const { setToggle } = this.props
      return (
         <div className='createAction'>
            <div className='breadcrumbs'>
               <div className='title'>System List &gt; Create</div>
               <IconClose onClick={() => setToggle('isClose')} />
            </div>
            <div className='title'>Create</div>
            <div className='createAction__tab'>
               <NavLink to='/create' className='title' activeClassName='title--active' exact={true}>
                  System
               </NavLink>
               <NavLink to='/create/environment' className='title' activeClassName='title--active' exact={true}>
                  Environment
               </NavLink>
            </div>
            <Switch>
               <Route exact path='/create' render={() => <TabSystem setToggle={setToggle} />} />
               <Route path='/create/environment' render={() => <TabEnvironment setToggle={setToggle} />} />
            </Switch>
         </div>
      )
   }
}
