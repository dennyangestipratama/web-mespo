import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
   return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export default UserContextProvider
