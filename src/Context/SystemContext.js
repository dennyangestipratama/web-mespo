import { createContext, useEffect, useState } from 'react'
import SystemController from '@Services/SystemController'

export const SystemContext = createContext()
export const SystemContextConsumer = SystemContext.Consumer

const SystemContextProvider = ({ children }) => {
   const [system, setSystem] = useState({
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
            selectedSystem,
            showAction,
            showDelete,
            isSuccessSystem,
            deleteSystem,
            search,
            detailSystem,
            setDetailSystem,
            setSearch,
            setDeleteSystem,
            setIsSuccessSystem,
            setShowDelete,
            setShowAction,
            setSelectedSystem,
            setCreate,
            setSystem,
            deletingSystem,
            fetchSystem,
            fetchDetailSystem,
         }}>
         {children}
      </SystemContext.Provider>
   )
}

export default SystemContextProvider
