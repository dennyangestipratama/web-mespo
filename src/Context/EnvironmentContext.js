import { createContext, useState, useEffect } from 'react'
import EnvironmentController from '@Services/EnvironmentController'

export const EnvironmentContext = createContext()
export const EnvironmentContextConsumer = EnvironmentContext.Consumer

const EnvironmentContextProvider = ({ children }) => {
   const [environment, setEnvironment] = useState({
      isLoading: false,
      items: [],
   })

   const [environmentSystem, setEnvironmentSystem] = useState({
      isLoading: false,
      items: [],
   })

   const [selectedEnvironment, setSelectedEnvironment] = useState(null)
   const [isSuccessEnvironment, setIsSuccessEnvironment] = useState(false)

   const [create, setCreate] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         name: '',
         description: '',
      },
   })

   const [deleteEnvironment, setDeleteEnvironment] = useState({
      isSubmit: false,
      name: '',
   })

   const fetchEnvironment = () => {
      setEnvironment((prevState) => ({ ...prevState, isLoading: true, items: [] }))
      EnvironmentController.environment().then((response) => {
         setEnvironment((prevState) => ({ ...prevState, isLoading: false, items: response }))
      })
   }

   useEffect(() => {
      fetchEnvironment()
   }, [])

   return (
      <EnvironmentContext.Provider
         value={{
            environment,
            environmentSystem,
            selectedEnvironment,
            create,
            isSuccessEnvironment,
            setIsSuccessEnvironment,
            setCreate,
            setSelectedEnvironment,
            setEnvironmentSystem,
            setEnvironment,
            fetchEnvironment,
         }}>
         {children}
      </EnvironmentContext.Provider>
   )
}

export default EnvironmentContextProvider
