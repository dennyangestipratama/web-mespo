import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import InputLogin from '@Components/InputLogin'
import Button from '@Components/Button'

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
      if (username.value === '' && password.value === '') {
         alert('cannot be blank')
      } else {
         alert(`
         Welcome ${username.value},
         your password is ${password.value}
         `)
         history.push('/system-environment')
      }
   }

   return (
      <section className='login'>
         <form onSubmit={submit} className='login__card'>
            <img src={Mespo} alt='mespo' className='login__logo' />
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
            <a href='/' className='login__forget text__link'>
               Forgot Password
            </a>
            <Button type='submit' label='Login' showImage={true} icon={<IconLogin className='login__button-icon' />} />
         </form>
      </section>
   )
}
