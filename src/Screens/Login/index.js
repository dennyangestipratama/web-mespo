import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '@Image/logo.png'
import { ReactComponent as IconLogin } from '@Icon/login.svg'
import { ReactComponent as IconEyeOpen } from '@Icon/eye-open.svg'

const Login = () => {
   const history = useHistory()
   const [showPassword, setShowPassword] = useState(false)
   const [onFocusUsername, setOnFocusUsername] = useState(false)
   const [onFocusPassword, setOnFocusPassword] = useState(false)

   const focusUsername = () => {
      setOnFocusUsername(true)
      setOnFocusPassword(false)
   }

   const focusPassword = () => {
      setOnFocusUsername(false)
      setOnFocusPassword(true)
   }

   const submit = () => {
      history.push('/system')
   }

   return (
      <section className="login">
         <form onSubmit={submit} className="login__card">
            <img className="login__logo" src={Logo} alt="mespo-logo" />
            <label className='login__label' htmlFor="username">Username</label>
            <div className={`login__input ${onFocusUsername ? 'login__focus' : ''}`} onClick={() => focusUsername()}>
               <input type="text" id='username' placeholder='username' />
            </div>
            <label className='login__label' htmlFor="username">Password</label>
            <div className={`login__input ${onFocusPassword ? 'login__focus' : ''}`} onClick={() => focusPassword()}>
               <input type={showPassword ? 'text' : 'password'} id='username' placeholder='type your password ...' />
               <IconEyeOpen onClick={() => setShowPassword(!showPassword)} />
            </div>
            <a href='#' className="login__forgot">Forgot Password</a>
            <div className="login__btn">
               <IconLogin />
               <button type='submit'>Login</button>
            </div>
         </form>
      </section>
   )
}

export default Login
