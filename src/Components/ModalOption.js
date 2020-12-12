import React, { Component } from 'react'

import { ReactComponent as IconClone } from '@Assets/Icon/clone.svg'
import { ReactComponent as IconEdit } from '@Assets/Icon/edit.svg'
import { ReactComponent as IconDelete } from '@Assets/Icon/delete.svg'

export class ModalOptionSystem extends Component {
   render() {
      const { showOption, title } = this.props
      return (
         <div className='modalOption'>
            <div className="modalOption__title">{title}</div>
            <div className="body">
               <div className="wrapper" onClick={() => showOption(0)}>
                  <IconClone />
                  <span>Clone</span>
               </div>
               <div className="wrapper" onClick={() => showOption(0)}>
                  <IconEdit />
                  <span>Edit</span>
               </div>
               <div className="wrapper delete" onClick={() => showOption(0)}>
                  <IconDelete />
                  <span>Delete</span>
               </div>
            </div>
         </div>
      )
   }
}
