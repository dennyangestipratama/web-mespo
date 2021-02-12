import React from 'react'

import { ReactComponent as IconSearch } from '@Icon/search.svg'

export default function Search({ placeholder, value, onChange, onSubmit }) {
   return (
      <form onSubmit={onSubmit} className='search'>
         <input className='search__input text__search text__search' type='text' value={value} onChange={onChange} placeholder={placeholder} />
         <IconSearch className='search__icon' />
      </form>
   )
}
