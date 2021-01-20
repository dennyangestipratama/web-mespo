import React from 'react'
import EmptyAction from '@Components/EmptyAction'

import Frank from '@Image/frank.png'

export default function Action() {
   return (
      <section className='action'>
         <EmptyAction
            src={Frank}
            content='Don’t let frank wreck your release! Add a feature now.'
            label='Add a feature here'
            placeholder='Search Feature'
         />
      </section>
   )
}
