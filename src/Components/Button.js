import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ showImage = false, icon = null, label, color = '#3776FF', border, onClick, type = 'button' }) {
   return (
      <button type={type} onClick={onClick} className='button' style={{ background: color, border: border }}>
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
