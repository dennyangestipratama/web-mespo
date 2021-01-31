import React from 'react'

export default function TextArea({ label, value, onChange, type, placeholder, isFocus, onClick }) {
   return (
      <div className='textarea'>
         <label className='textarea__label text__label' htmlFor='textarea'>
            {label}
         </label>
         <textarea onClick={onClick} className='textarea__element textarea__default text__input' cols='30' rows='10' value={value} onChange={onChange} id='textarea' type={type} />
         {isFocus ? null : <span className='placeholder'>{placeholder}</span>}
      </div>
   )
}
