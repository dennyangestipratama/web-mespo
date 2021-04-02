import React from 'react'

export default function TableForm({ submit, input }) {
   return (
      <form className='table' onSubmit={submit}>
         <div className='table__header --menu'></div>
         <div className='table__header'>Name</div>
         <div className='table__header'>Value Type</div>
         <div className='table__header'>Value</div>
         <div className='table__header'></div>
         {input}
      </form>
   )
}
