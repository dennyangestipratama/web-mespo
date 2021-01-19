import PropTypes from 'prop-types'

export default function Input({
   label,
   type = "text",
   placeholder,
   showImage = false,
   icon = null,
   value,
   onChange,
   onClick,
   isFocus
}) {
   return (
      <div className='input'>
         <label className='input__label text__label' htmlFor="input">{label}</label>
         <div className={`input__wrapper ${isFocus ? 'input--focus' : ''}`} onClick={onClick}>
            <input className='input__element text__input' value={value} onChange={onChange} id='input' type={type} placeholder={placeholder} />
            {showImage ? icon : null}
         </div>
      </div>
   )
}

Input.propTypes = {
   label: PropTypes.string,
   type: PropTypes.string,
   placeholder: PropTypes.string,
   showImage: PropTypes.bool,
   icon: PropTypes.node,
   isFocus: PropTypes.bool,
   value: PropTypes.string,
   onChange: PropTypes.func,
   onClick: PropTypes.func
}