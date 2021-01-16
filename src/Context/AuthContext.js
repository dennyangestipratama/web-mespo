import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
export const AuthContextConsumer = AuthContext.Consumer

const AuthContextProvider = ({ children }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   const checkSignIn = () => {
      if (localStorage.getItem('isLoggedIn')) {
         setIsLoggedIn(true)
      } else {
         setIsLoggedIn(false)
      }
   }

   const logout = () => {
      return new Promise((resolve, reject) => {
         localStorage.removeItem('isLoggedIn')
         setIsLoggedIn(false)
      })
   }

   useEffect(() => {
      checkSignIn()
   }, [])

   return (
      <AuthContext.Provider
         value={{
            isLoggedIn,
            setIsLoggedIn,
            logout,
         }}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContextProvider
