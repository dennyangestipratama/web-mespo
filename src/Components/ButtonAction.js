import React from 'react'

export default function ButtonAction({ label, icon, theme = 'normal', onClick }) {
   return (
      <button onClick={onClick} className={`button-action button-action--${theme} text__button-action`}>
         {icon}
         <span>{label}</span>
      </button>
   )
}
