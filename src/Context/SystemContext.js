import { createContext, useEffect, useState } from 'react'
import SystemController from '@Services/SystemController'

export const SystemContext = createContext()
export const SystemContextConsumer = SystemContext.Consumer

const SystemContextProvider = ({ children }) => {
   const [system, setSystem] = useState({
      isLoading: false,
      items: [],
   })

   const [systemProperties, setSystemProperties] = useState({
      isLoading: false,
      items: [],
   })

   const [detailSystem, setDetailSystem] = useState({
      isLoading: false,
      data: null,
   })

   const [create, setCreate] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         name: '',
         description: '',
         systemId: null,
      },
   })

   const [update, setUpdate] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         name: '',
         description: '',
         systemId: '',
         ownerPartyId: '',
      },
   })

   const [search, setSearch] = useState({
      isSubmit: false,
      parameters: {
         q: '',
         pageNumber: 1,
         pageSize: 10,
      },
   })

   const [deleteSystem, setDeleteSystem] = useState({
      isSubmit: false,
      name: '',
   })

   const [isSuccessSystem, setIsSuccessSystem] = useState(false)
   const [selectedSystem, setSelectedSystem] = useState(null)
   const [showAction, setShowAction] = useState(null)
   const [showDelete, setShowDelete] = useState(null)

   const fetchSystem = () => {
      setSystem((prevState) => ({ ...prevState, isLoading: true, items: [] }))
      SystemController.system().then((response) => {
         setSystem((prevState) => ({ ...prevState, isLoading: false, items: response }))
      })
   }

   const fetchDetailSystem = (ID) => {
      setDetailSystem((prevState) => ({ ...prevState, isLoading: true, data: null }))
      SystemController.detailSystem(ID).then((response) => {
         setDetailSystem((prevState) => ({ ...prevState, isLoading: false, data: response }))
         setUpdate((prevState) => ({
            ...prevState,
            parameters: {
               ...update.parameters,
               name: response.name,
               description: response.description,
               version: response.version,
               systemId: response.systemId,
               ownerPartyId: response.ownerPartyId,
            },
         }))
      })
   }

   const fetchSystemProperties = (ID) => {
      setSystemProperties((prevState) => ({ ...prevState, isLoading: true, items: [] }))
      SystemController.systemProperties(ID).then((response) => {
         setSystemProperties((prevState) => ({ ...prevState, isLoading: true, items: response }))
      })
   }

   const deletingSystem = (id, params) => {
      SystemController.deleteSystem(id, params).then((response) => {
         setShowDelete(null)
         setShowAction(null)
         setDeleteSystem((prevState) => ({ ...prevState, isSubmit: false, name: '' }))
         fetchSystem()
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
            update,
            selectedSystem,
            showAction,
            showDelete,
            isSuccessSystem,
            deleteSystem,
            search,
            detailSystem,
            systemProperties,
            setSystemProperties,
            setDetailSystem,
            setSearch,
            setDeleteSystem,
            setIsSuccessSystem,
            setShowDelete,
            setShowAction,
            setSelectedSystem,
            setCreate,
            setUpdate,
            setSystem,
            deletingSystem,
            fetchSystem,
            fetchDetailSystem,
            fetchSystemProperties,
         }}>
         {children}
      </SystemContext.Provider>
   )
}

export default SystemContextProvider
