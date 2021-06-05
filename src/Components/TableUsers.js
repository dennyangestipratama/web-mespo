import React from 'react'

export default function TableUsers({ items }) {
   return (
      <React.Fragment>
         <div className='table-users'>
            <div className='table__header --menu'></div>
            <div className='table__header'>Username</div>
            <div className='table__header'>First Name</div>
            <div className='table__header'>Last Name</div>
            <div className='table__header'>Created</div>
            <div className='table__header'>Email</div>
            <div className='table__header'>Actions</div>
         </div>
         <div className='table-users__body'>{items}</div>
      </React.Fragment>
   )
}
