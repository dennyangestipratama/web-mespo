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
   const [showAction, setShowAction] = useState(null)
   const [showDelete, setShowDelete] = useState(null)

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

   const [detailEnvironment, setDetailEnvironment] = useState({
      isLoading: false,
      data: null,
   })

   const deletingEnvironment = (id, params) => {
      EnvironmentController.deleteEnvironment(id, params).then((response) => {
         setShowDelete(null)
         setShowAction(null)
         setDeleteEnvironment((prevState) => ({ ...prevState, isSubmit: false, name: '' }))
         fetchEnvironment()
      })
   }

   const fetchEnvironment = () => {
      setEnvironment((prevState) => ({ ...prevState, isLoading: true, items: [] }))
      EnvironmentController.environment().then((response) => {
         setEnvironment((prevState) => ({ ...prevState, isLoading: false, items: response }))
      })
   }

   const fetchDetailEnvironment = (ID) => {
      setDetailEnvironment((prevState) => ({ ...prevState, isLoading: true, data: null }))
      EnvironmentController.detailEnvironment(ID).then((response) => {
         setDetailEnvironment((prevState) => ({ ...prevState, isLoading: false, data: response }))
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
            detailEnvironment,
            selectedEnvironment,
            create,
            showAction,
            showDelete,
            isSuccessEnvironment,
            deleteEnvironment,
            setDeleteEnvironment,
            setShowAction,
            setShowDelete,
            setDetailEnvironment,
            setIsSuccessEnvironment,
            setCreate,
            setSelectedEnvironment,
            setEnvironmentSystem,
            setEnvironment,
            fetchEnvironment,
            fetchDetailEnvironment,
            deletingEnvironment,
         }}>
         {children}
      </EnvironmentContext.Provider>
   )
}

export default EnvironmentContextProvider
