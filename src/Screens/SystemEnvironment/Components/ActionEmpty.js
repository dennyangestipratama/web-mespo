import { Component } from 'react'

import GhostImage from '@Assets/Image/ghost.png'
import AddSystemImage from '@Assets/Image/add-system.png'

export default class ActionEmpty extends Component {
   render() {
      return (
         <div className='action__body'>
            <img className='add-system' src={AddSystemImage} alt='add-system' />
            <div className='title'>Add your system to shoo away the boo-boo!</div>
            <img src={GhostImage} alt='ghost' />
         </div>
      )
   }
}
