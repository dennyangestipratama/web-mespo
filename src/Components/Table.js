import React from 'react'

export default function Table({ items }) {
   return (
      <div className='main__body__content'>
         <div className='table'>
            <div className='table__header --menu'></div>
            <div className='table__header'>Name</div>
            <div className='table__header'>Value Type</div>
            <div className='table__header'>Value</div>
            <div className='table__header'></div>
         </div>
         <div className='table-body'>{items}</div>
      </div>
   )
}
