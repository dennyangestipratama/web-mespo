import { createContext, useEffect, useState } from 'react'
export const UtilsContext = createContext()
export const UtilsContextConsumer = UtilsContext.Consumer

const UtilsContextProvider = ({ children }) => {
   const [showAction, setShowAction] = useState(true)
   const [isMini, setIsMini] = useState(false)
   const [isSuccessSystem, setIsSuccessSystem] = useState(false)

   return (
      <UtilsContext.Provider
         value={{
            showAction,
            isMini,
            isSuccessSystem,
            setIsSuccessSystem,
            setIsMini,
            setShowAction,
         }}>
         {children}
      </UtilsContext.Provider>
   )
}

export default UtilsContextProvider
