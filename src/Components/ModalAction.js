import React from 'react'

export default function ModalAction({ title, button, onClick }) {
   return (
      <div className='modal-action'>
         <div className='modal-action__title text__button-action' onClick={onClick}>
            {title}
         </div>
         <div className='modal-action__btn'>{button}</div>
      </div>
   )
}
