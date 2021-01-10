import React, { Component } from 'react'

import AddProperties from '@Image/add-properties.png'

export default class MainEmpty extends Component {
   render() {
      return (
         <div className='main__body__empty'>
            <img src={AddProperties} alt='arrow' />
            <div className='title'>Add your properties here</div>
            <div className='info'>By manually add a property or upload your file.</div>
         </div>
      )
   }
}
