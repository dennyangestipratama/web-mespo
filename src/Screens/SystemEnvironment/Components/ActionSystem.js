import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ModalOptionSystem } from '@Components/ModalOption'
import { ReactComponent as IconMore } from '@Icon/more-vertical.svg'

export default class ActionSystem extends Component {
   render() {
      const { systems, selectedSystem, selectSystem, setType, showOption, showOptionSystem, setToggle } = this.props
      return (
         <div className='action__content'>
            {systems.map((system, index) => {
               return (
                  <Link to={`/system/${system.ID}`} onClick={() => selectSystem(system.ID)}>
                     <div className={`system ${selectedSystem === system.ID ? 'active' : ''}`} key={index}>
                        <div className='title'>{system.name}</div>
                        <IconMore onClick={() => showOption(system.ID)} />
                        {showOptionSystem === system.ID ? <ModalOptionSystem title={'System Action'} setToggle={setToggle} setType={setType} showOption={showOption} /> : null}
                     </div>
                  </Link>
               )
            })}
         </div>
      )
   }
}
