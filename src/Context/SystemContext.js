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
            setDeleteSystem,
            setIsSuccessSystem,
            setShowDelete,
            setShowAction,
            setSelectedSystem,
            setCreate,
            setSystem,
            deletingSystem,
            fetchSystem,
         }}>
         {children}
      </SystemContext.Provider>
   )
}

export default SystemContextProvider
