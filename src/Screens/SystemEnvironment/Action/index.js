import React from 'react'
import EmptyAction from '@Components/EmptyAction'

import Ghost from '@Image/ghost.png'

export default function Action() {
   return (
      <section className='action'>
         <EmptyAction
            src={Ghost}
            content='Add your system to shoo away the boo-boo!'
            label='Add a system here'
            placeholder='Search System'
         />
      </section>
   )
}
