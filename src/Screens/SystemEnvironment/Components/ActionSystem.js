import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as IconMore } from '@Assets/Icon/more-vertical.svg'

export default class ActionSystem extends Component {
   render() {
      const { systems, selectedSystem, selectSystem } = this.props
      return (
         <div className='action__content'>
            {systems.map((system, index) => {
               return (
                  <Link to={`/system/${system.ID}`} onClick={() => selectSystem(system.ID)}>
                     <div className={`system ${selectedSystem === system.ID ? 'active' : ''}`} key={index}>
                        <div className='title'>{system.name}</div>
                        <IconMore />
                     </div>
                  </Link>
               )
            })}
         </div>
      )
   }
}
