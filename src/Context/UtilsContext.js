import { createContext, useState } from 'react'
export const UtilsContext = createContext()
export const UtilsContextConsumer = UtilsContext.Consumer

const UtilsContextProvider = ({ children }) => {
   const [showAction, setShowAction] = useState(true)
   const [isMini, setIsMini] = useState(false)

   return (
      <UtilsContext.Provider
         value={{
            showAction,
            isMini,
            setIsMini,
            setShowAction,
         }}>
         {children}
      </UtilsContext.Provider>
   )
}

export default UtilsContextProvider
