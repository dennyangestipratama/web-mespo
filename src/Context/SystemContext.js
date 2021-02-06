import { createContext, useEffect, useState } from 'react'
import SystemController from '@Services/SystemController'

export const SystemContext = createContext()
export const SystemContextConsumer = SystemContext.Consumer

const SystemContextProvider = ({ children }) => {
   const [system, setSystem] = useState({
      isLoading: false,
      items: [],
   })

   const [create, setCreate] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         name: '',
         description: '',
      },
   })

   const fetchSystem = () => {
      setSystem((prevState) => ({ ...prevState, isLoading: true, items: [] }))
      SystemController.system().then((response) => {
         setSystem((prevState) => ({ ...prevState, isLoading: false, items: response }))
      })
   }

   useEffect(() => {
      fetchSystem()
   }, [])

   return (
      <SystemContext.Provider
         value={{
            system,
            create,
            setCreate,
            setSystem,
         }}>
         {children}
      </SystemContext.Provider>
   )
}

export default SystemContextProvider
