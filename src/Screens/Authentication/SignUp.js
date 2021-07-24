import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import InputLogin from '@Components/InputLogin'
import Button from '@Components/Button'
import AuthFooter from '@Components/AuthFooter'

import Mespo from '@Image/logo.png'
import { ReactComponent as EyeOpen } from '@Icon/eye-open.svg'
import { ReactComponent as EyeClose } from '@Icon/eye-close.svg'
import { ReactComponent as IconLogin } from '@Icon/login.svg'

export default function SignUp() {
   const [redirect, setRedirect] = useState(false)
   const [email, setEmail] = useState({
      isFocus: false,
      value: '',
   })
   const [password, setPassword] = useState({
      isFocus: false,
      isVisible: false,
      value: '',
   })
   const [confirmPassword, setConfirmPassword] = useState({
      isFocus: false,
      isVisible: false,
      value: '',
   })

   const submit = (event) => {
      event.preventDefault()
      if (email.value === '') return alert('email cannot be blank')
      if (password.value === '') return alert('password cannot be blank')
      if (password.value !== confirmPassword.value) return alert('password must be the same')

      localStorage.setItem('email', email.value)
      localStorage.setItem('password', password.value)

      setRedirect(true)
   }

   if (redirect) return <Redirect to='/signup/verification' />

   return (
      <section className='auth'>
         <form onSubmit={submit} className='auth__card auth__card--register'>
            <img src={Mespo} alt='mespo' className='auth__logo' />
            <InputLogin
               label='Email'
               placeholder='Type your email'
               type='email'
               value={email.value}
               isFocus={email.isFocus}
               onClick={() => {
                  setEmail((prevState) => ({ ...prevState, isFocus: true }))
                  setPassword((prevState) => ({ ...prevState, isFocus: false }))
                  setConfirmPassword((prevState) => ({ ...prevState, isFocus: false }))
               }}
               onChange={(event) => {
                  setEmail((prevState) => ({ ...prevState, value: event.target.value }))
               }}
            />
            <InputLogin
               label='Password'
               placeholder='Type your password...'
               type={password.isVisible ? 'text' : 'password'}
               showImage={true}
               icon={
                  password.isVisible ? (
                     <EyeOpen onClick={() => setPassword((prevState) => ({ ...prevState, isVisible: !prevState.isVisible }))} />
                  ) : (
                     <EyeClose onClick={() => setPassword((prevState) => ({ ...prevState, isVisible: !prevState.isVisible }))} />
                  )
               }
               value={password.value}
               isFocus={password.isFocus}
               onClick={() => {
                  setPassword((prevState) => ({ ...prevState, isFocus: true }))
                  setConfirmPassword((prevState) => ({ ...prevState, isFocus: false }))
                  setEmail((prevState) => ({ ...prevState, isFocus: false }))
               }}
               onChange={(event) => {
                  setPassword((prevState) => ({ ...prevState, value: event.target.value }))
               }}
            />
            <InputLogin
               label='Retype Password'
               placeholder='Type your password again'
               type={confirmPassword.isVisible ? 'text' : 'password'}
               showImage={true}
               icon={
                  confirmPassword.isVisible ? (
                     <EyeOpen onClick={() => setConfirmPassword((prevState) => ({ ...prevState, isVisible: !prevState.isVisible }))} />
                  ) : (
                     <EyeClose onClick={() => setConfirmPassword((prevState) => ({ ...prevState, isVisible: !prevState.isVisible }))} />
                  )
               }
               value={confirmPassword.value}
               isFocus={confirmPassword.isFocus}
               onClick={() => {
                  setConfirmPassword((prevState) => ({ ...prevState, isFocus: true }))
                  setPassword((prevState) => ({ ...prevState, isFocus: false }))
                  setEmail((prevState) => ({ ...prevState, isFocus: false }))
               }}
               onChange={(event) => {
                  setConfirmPassword((prevState) => ({ ...prevState, value: event.target.value }))
               }}
            />
            <Button type='submit' label='Sign up' showImage={true} icon={<IconLogin className='auth__button-icon' />} />
            <AuthFooter text='Already have an account?' link='Login' href='/' />
         </form>
      </section>
   )
}
