import { MODAL_SUCCESS_CREATE_SYSTEM, MODAL_SUCCESS_CREATE_ENVIRONMENT } from '@Utilities'

import { ReactComponent as IconSystem } from '@Icon/system.svg'
import { ReactComponent as IconEnvironment } from '@Icon/environment.svg'

const Modal = ({ type, isNo, isYes, text, info }) => {
   const redirect = () => {
      const { type } = this.props
      if (type === MODAL_SUCCESS_CREATE_SYSTEM) {
         this.props.history.push('/create/environment')
      } else if (type === MODAL_SUCCESS_CREATE_ENVIRONMENT) {
         this.props.history.push('/create')
      } else {
         return null
      }
   }

   return (
      <div className='modal'>
         {type === MODAL_SUCCESS_CREATE_SYSTEM ? <IconSystem /> : MODAL_SUCCESS_CREATE_ENVIRONMENT ? <IconEnvironment /> : null}
         <div className='title'>
            <span>{type === MODAL_SUCCESS_CREATE_SYSTEM ? 'System ' : MODAL_SUCCESS_CREATE_ENVIRONMENT ? 'Environment ' : null}</span>
            <span style={{ color: '#3776FF' }}>{text} </span>
            <span>is successfully created !</span>
         </div>
         <div className='info'>{info}</div>
         <div className='buttonModal'>
            <button
               className='no'
               onClick={() => {
                  isNo('isModalSystem')
                  isNo('isModalEnvironment')
               }}>
               No
         </button>
            <button
               onClick={() => {
                  isYes('isModalSystem')
                  isYes('isModalEnvironment')
                  redirect()
               }}>
               Yes
         </button>
         </div>
      </div>
   )
}

export default Modal