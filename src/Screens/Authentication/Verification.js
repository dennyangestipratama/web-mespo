import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ReactCodeInput from 'react-code-input'

import Button from '@Components/Button'
import { ReactComponent as Mail } from '@Icon/verification.svg'

export default function Verification() {
   const [redirect, setRedirect] = useState(false)
   const [code, setCode] = useState({
      value: '',
   })

   const submit = (event) => {
      event.preventDefault()
      if (code.value === '') return alert('code cannot be blank')

      localStorage.setItem('code', code.value)

      setRedirect(true)
   }

   if (redirect) return <Redirect to='/signup/complete' />

   return (
      <section className='auth'>
         <form onSubmit={submit} className='auth__card'>
            <h3 className='auth__title'>Verification</h3>
            <Mail className='auth__icon' />
            <p className='auth__text'>Input the code we have sent you via email.</p>
            <label className='input__label text__label'>Code</label>
            <ReactCodeInput
               fields={4}
               label='Code'
               placeholder='Type your code'
               type='number'
               onChange={(event) => {
                  setCode((prevState) => ({ ...prevState, value: event }))
               }}
            />
            <Button type='submit' label='Verify' />
         </form>
      </section>
   )
}
