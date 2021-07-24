import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import InputLogin from '@Components/InputLogin'
import Button from '@Components/Button'

export default function Complete() {
   const [redirect, setRedirect] = useState(false)
   const [firstName, setFirstName] = useState({
      isFocus: false,
      value: '',
   })
   const [lastName, setLastName] = useState({
      isFocus: false,
      value: '',
   })
   const [companyName, setCompanyName] = useState({
      isFocus: false,
      value: '',
   })

   const submit = (event) => {
      event.preventDefault()
      if (firstName.value === '') return alert('email cannot be blank')
      if (lastName.value === '') return alert('password cannot be blank')
      if (companyName.value === '') return alert('company name cannot be blank')

      localStorage.setItem('first name:', firstName.value)
      localStorage.setItem('last name', lastName.value)
      localStorage.setItem('company name', companyName.value)

      setRedirect(true)
   }

   if (redirect) return <Redirect to='/system-environment' />

   return (
      <section className='auth'>
         <form onSubmit={submit} className='auth__card'>
            <h3 className='auth__title'>Complete Profile</h3>
            <div className='auth__grid'>
               <InputLogin
                  label='First Name'
                  placeholder='Type your first name'
                  type='text'
                  value={firstName.value}
                  isFocus={firstName.isFocus}
                  onClick={() => {
                     setFirstName((prevState) => ({ ...prevState, isFocus: true }))
                     setLastName((prevState) => ({ ...prevState, isFocus: false }))
                     setCompanyName((prevState) => ({ ...prevState, isFocus: false }))
                  }}
                  onChange={(event) => {
                     setFirstName((prevState) => ({ ...prevState, value: event.target.value }))
                  }}
               />
               <InputLogin
                  label='Last Name'
                  placeholder='Type your last name'
                  type='text'
                  value={lastName.value}
                  isFocus={lastName.isFocus}
                  onClick={() => {
                     setLastName((prevState) => ({ ...prevState, isFocus: true }))
                     setCompanyName((prevState) => ({ ...prevState, isFocus: false }))
                     setFirstName((prevState) => ({ ...prevState, isFocus: false }))
                  }}
                  onChange={(event) => {
                     setLastName((prevState) => ({ ...prevState, value: event.target.value }))
                  }}
               />
            </div>
            <InputLogin
               label='Company Name'
               placeholder='Type your company name'
               type='text'
               value={companyName.value}
               isFocus={companyName.isFocus}
               onClick={() => {
                  setCompanyName((prevState) => ({ ...prevState, isFocus: true }))
                  setLastName((prevState) => ({ ...prevState, isFocus: false }))
                  setFirstName((prevState) => ({ ...prevState, isFocus: false }))
               }}
               onChange={(event) => {
                  setCompanyName((prevState) => ({ ...prevState, value: event.target.value }))
               }}
            />
            <Button type='submit' label='Save' />
         </form>
      </section>
   )
}
