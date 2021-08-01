import PropTypes from 'prop-types'

export default function InputLogin({ label, type = 'text', placeholder, showImage = false, icon = null, value, onChange, onClick, isFocus, isError }) {
   return (
      <div className='input'>
         <label className='input__label text__label'>{label}</label>
         <div className={`input__wrapper ${isFocus ? 'input--focus' : isError ? 'input--error' : ''}`} onClick={onClick}>
            <input className='input__element text__input' value={value} onChange={onChange} type={type} placeholder={placeholder} />
            {showImage ? icon : null}
         </div>
      </div>
   )
}

InputLogin.propTypes = {
   label: PropTypes.string,
   type: PropTypes.string,
   placeholder: PropTypes.string,
   showImage: PropTypes.bool,
   icon: PropTypes.node,
   isFocus: PropTypes.bool,
   value: PropTypes.string,
   onChange: PropTypes.func,
   onClick: PropTypes.func,
}
