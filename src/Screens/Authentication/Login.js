import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import InputLogin from '@Components/InputLogin'
import Button from '@Components/Button'
import AuthFooter from '@Components/AuthFooter'

import Mespo from '@Image/logo.png'
import { ReactComponent as EyeOpen } from '@Icon/eye-open.svg'
import { ReactComponent as EyeClose } from '@Icon/eye-close.svg'
import { ReactComponent as IconLogin } from '@Icon/login.svg'

export default function Login() {
   const history = useHistory()
   const [seePassword, setSeePassword] = useState(false)
   const [username, setUsername] = useState({
      isFocus: false,
      value: '',
   })
   const [password, setPassword] = useState({
      isFocus: false,
      value: '',
   })

   const submit = (event) => {
      event.preventDefault()
      if (username.value === '') return alert('username cannot be blank')
      if (password.value === '') return alert('password cannot be blank')
      if (username.value !== localStorage.getItem('username')) return alert('cannot find any username/password')
      if (password.value !== localStorage.getItem('password')) return alert('cannot find any username/password')

      alert(`
      Welcome ${username.value},
      your password is ${password.value}
      `)
      history.push('/system-environment')
   }

   return (
      <section className='auth'>
         <form onSubmit={submit} className='auth__card'>
            <img src={Mespo} alt='mespo' className='auth__logo' />
            <InputLogin
               label='Username'
               placeholder='Type your username'
               type='text'
               value={username.value}
               isFocus={username.isFocus}
               onClick={() => {
                  setUsername((prevState) => ({ ...prevState, isFocus: true }))
                  setPassword((prevState) => ({ ...prevState, isFocus: false }))
               }}
               onChange={(event) => {
                  setUsername((prevState) => ({ ...prevState, value: event.target.value }))
               }}
            />
            <InputLogin
               label='Password'
               placeholder='Type your password...'
               type={seePassword ? 'text' : 'password'}
               showImage={true}
               icon={seePassword ? <EyeOpen onClick={() => setSeePassword(!seePassword)} /> : <EyeClose onClick={() => setSeePassword(!seePassword)} />}
               value={password.value}
               isFocus={password.isFocus}
               onClick={() => {
                  setPassword((prevState) => ({ ...prevState, isFocus: true }))
                  setUsername((prevState) => ({ ...prevState, isFocus: false }))
               }}
               onChange={(event) => {
                  setPassword((prevState) => ({ ...prevState, value: event.target.value }))
               }}
            />
            <a href='/' className='auth__forget text__link'>
               Forgot Password
            </a>
            <Button type='submit' label='Login' showImage={true} icon={<IconLogin className='auth__button-icon' />} />
            <AuthFooter text='Dont have an account?' link='Sign up' href='/signup' />
         </form>
      </section>
   )
}
