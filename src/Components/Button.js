import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ showImage = false, icon = null, size, label, variant = 'primary', border, onClick, type = 'button' }) {
   return (
      <button type={type} onClick={onClick} className={`button  button--${size} button--${variant}`} style={{ border: border }}>
         {showImage ? icon : null}
         <span className='text__button'>{label}</span>
      </button>
   )
}

Button.propTypes = {
   label: PropTypes.string,
   type: PropTypes.string,
   showImage: PropTypes.bool,
   icon: PropTypes.node,
   onClick: PropTypes.func,
   color: PropTypes.string,
}
