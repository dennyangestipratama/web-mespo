import React from 'react'
import EmptyIMG from '@Image/monster.png'

export default function MainEmpty() {
   return (
      <div className="empties">
         <div className="empties__title">Uh-oh! He looks mad .. I think he needs a toggle</div>
         <img src={EmptyIMG} alt="monster" />
      </div>
   )
}
