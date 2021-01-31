import React from 'react'

export default function Input({ label, onClick, value, onChange, type, placeholder }) {
   return (
      <div className='input' onClick={onClick}>
         <label className='input__label text__label' htmlFor='input'>
            {label}
         </label>
         <input className='input__element input__default text__input' value={value} onChange={onChange} id='input' type={type} placeholder={placeholder} />
      </div>
   )
}
