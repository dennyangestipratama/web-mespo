import { createContext, useEffect, useState } from 'react'
export const SystemContext = createContext()
export const SystemContextConsumer = SystemContext.Consumer

const SystemContextProvider = ({ children }) => {
   const [system, setSystem] = useState({
      isLoading: false,
      isLoadingMore: false,
      isHasMore: false,
      items: [],
   })
   return (
      <SystemContext.Provider
         value={{
            system,
            setSystem,
         }}>
         {children}
      </SystemContext.Provider>
   )
}

export default SystemContextProvider
