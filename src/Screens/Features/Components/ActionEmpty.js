import { Component } from 'react'

import EmptyIMG from '@Image/frank.png'
import AddFeatureImage from '@Image/add-feature.png'

export default class ActionEmpty extends Component {
   render() {
      return (
         <div className='action__body'>
            <img className='add-system' src={AddFeatureImage} alt='add-system' />
            <div className='title'>Don’t let frank wreck your release! Add a feature now.</div>
            <img src={EmptyIMG} alt='frank' />
         </div>
      )
   }
}
