import React, { Component } from 'react'

import { ReactComponent as IconUpload } from '@Assets/Icon/upload-modal.svg'
import { ReactComponent as IconClose } from '@Assets/Icon/close.svg'

export default class ModalUpload extends Component {
   render() {
      const { setToggle } = this.props
      return (
         <div className='modal__upload'>
            <IconClose className='close' onClick={() => setToggle('isModalUpload')} />
            <IconUpload />
            <div className="title">Upload your Properties File</div>
            <div className="box">
               <div className="button">
                  <IconUpload />
                  <div className="title">Select File...</div>
               </div>
               <div className="info">or drag your file in this box</div>
            </div>
            <div className="info">What file do I need?</div>
         </div>
      )
   }
}
