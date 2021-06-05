import React, { useState } from 'react'

import Input from '@Components/Input'
import Button from '@Components/Button'

import { ReactComponent as CloseSVG } from '@Icon/close.svg'

export default function ModalUser({ onClose, onClickNo, onClickYes }) {
   const [createUser, setCreateUser] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         username: '',
         first_name: '',
         last_name: '',
         email: '',
      },
   })
   return (
      <div className='modal-user'>
         <CloseSVG onClick={onClose} />
         <div className='modal-user__title'>Add User</div>
         <form className='modal-user__input'>
            <Input
               label='User Name'
               placeholder='Username'
               value={createUser.parameters.username}
               onChange={({ target: { value } }) => setCreateUser((prevState) => ({ ...prevState, parameters: { ...createUser.parameters, username: value } }))}
            />
            <div className='flex modal-user__name'>
               <Input
                  label='First Name'
                  placeholder='First Name'
                  value={createUser.parameters.first_name}
                  onChange={({ target: { value } }) => setCreateUser((prevState) => ({ ...prevState, parameters: { ...createUser.parameters, first_name: value } }))}
               />
               <Input
                  label='Last Name'
                  placeholder='Last Name'
                  value={createUser.parameters.last_name}
                  onChange={({ target: { value } }) => setCreateUser((prevState) => ({ ...prevState, parameters: { ...createUser.parameters, last_name: value } }))}
               />
            </div>
            <Input
               label='Email'
               placeholder='User Email'
               value={createUser.parameters.email}
               onChange={({ target: { value } }) => setCreateUser((prevState) => ({ ...prevState, parameters: { ...createUser.parameters, email: value } }))}
            />
            <div className='flex modal-user__action'>
               <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='No' onClick={onClickNo} />
               <Button type='submit' size='full' variant='primary' border='1px solid #3776FF' label='Yes' onClick={onClickYes} />
            </div>
         </form>
      </div>
   )
}
