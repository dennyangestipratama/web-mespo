import React, { useState, useContext } from 'react'

import { PeopleContext } from '@Context/PeopleContext'
import Input from '@Components/Input'
import Button from '@Components/Button'

import { ReactComponent as CloseSVG } from '@Icon/close.svg'

export default function ModalUpdateUser({ onClose, onClickNo, onClickYes, onSubmit }) {
   const peopleContext = useContext(PeopleContext)

   return (
      <div className='modal-user'>
         <CloseSVG onClick={onClose} />
         <div className='modal-user__title'>Edit User</div>
         <form onSubmit={onSubmit} className='modal-user__input'>
            <Input
               label='User Name'
               placeholder='Username'
               value={peopleContext.updateUser.parameters.username}
               onChange={({ target: { value } }) =>
                  peopleContext.setUpdateUser((prevState) => ({ ...prevState, parameters: { ...peopleContext.updateUser.parameters, username: value } }))
               }
            />
            <div className='flex modal-user__name'>
               <Input
                  label='First Name'
                  placeholder='First Name'
                  value={peopleContext.updateUser.parameters.first_name}
                  onChange={({ target: { value } }) =>
                     peopleContext.setUpdateUser((prevState) => ({ ...prevState, parameters: { ...peopleContext.updateUser.parameters, first_name: value } }))
                  }
               />
               <Input
                  label='Last Name'
                  placeholder='Last Name'
                  value={peopleContext.updateUser.parameters.last_name}
                  onChange={({ target: { value } }) =>
                     peopleContext.setUpdateUser((prevState) => ({ ...prevState, parameters: { ...peopleContext.updateUser.parameters, last_name: value } }))
                  }
               />
            </div>
            <Input
               label='Email'
               placeholder='User Email'
               value={peopleContext.updateUser.parameters.email}
               onChange={({ target: { value } }) =>
                  peopleContext.setUpdateUser((prevState) => ({ ...prevState, parameters: { ...peopleContext.updateUser.parameters, email: value } }))
               }
            />
            <div className='flex modal-user__action'>
               <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='Cancel' onClick={onClickNo} />
               <Button type='submit' size='full' variant='primary' border='1px solid #3776FF' label='Save' onClick={onClickYes} />
            </div>
         </form>
      </div>
   )
}
