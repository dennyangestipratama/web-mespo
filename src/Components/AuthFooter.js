import React from 'react'

export default function AuthFooter({ text, link, href }) {
   return (
      <div className='auth__footer'>
         <h4 className='text__auth-footer'>{text}</h4>
         <a href={href} className='text__link'>
            {link}
         </a>
      </div>
   )
}
