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
   const [selectingEnvironment, setSelectingEnvironment] = useState([])
   const [isSuccessEnvironment, setIsSuccessEnvironment] = useState(false)
   const [showAction, setShowAction] = useState(null)
   const [showDelete, setShowDelete] = useState(null)

   const [create, setCreate] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         name: '',
         description: '',
         environmentId: '',
         url: '',
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

   const [update, setUpdate] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         name: '',
         description: '',
         environmentId: '',
         ownerPartyId: '',
      },
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
         setUpdate((prevState) => ({
            ...prevState,
            parameters: {
               ...update.parameters,
               name: response.name,
               description: response.description,
               version: response.version,
               environmentId: response.environmentId,
               ownerPartyId: response.ownerPartyId,
            },
         }))
      })
   }

   const fetchEnvironmentSystem = (ID) => {
      setEnvironmentSystem((prevState) => ({ ...prevState, isLoading: true, items: [] }))
      EnvironmentController.detailEnvironmentSystem(ID).then((response) => {
         setEnvironmentSystem((prevState) => ({ ...prevState, isLoading: false, items: response }))
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
            update,
            selectingEnvironment,
            setSelectingEnvironment,
            setUpdate,
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
            fetchEnvironmentSystem,
            deletingEnvironment,
         }}>
         {children}
      </EnvironmentContext.Provider>
   )
}

export default EnvironmentContextProvider
