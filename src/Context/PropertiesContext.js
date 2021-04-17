import { createContext, useState } from 'react'
import PropertiesController from '@Services/PropertiesController'

export const PropertiesContext = createContext()
export const PropertiesContextConsumer = PropertiesContext.Consumer

const PropertiesContextProvider = ({ children }) => {
   const [systemProperties, setSystemProperties] = useState({
      isLoading: true,
      isReset: false,
      items: [],
   })

   const [createProperties, setCreateProperties] = useState({
      isSubmit: false,
      data: null,
      params: {
         name: '',
         value: '',
         valueType: '',
      },
   })

   const [updateProperties, setUpdateProperties] = useState({
      isSubmit: false,
      data: null,
      params: {
         name: '',
         systemId: '',
         propertyId: '',
         propertyTypeId: '',
         value: '',
         valueType: '',
         version: '',
         ownerPartyId: '',
         valueVersion: '',
      },
   })

   const [selectedProperties, setSelectedProperties] = useState(null)

   const fetchSystemProperties = (ID) => {
      PropertiesController.detailSystemProperties(ID).then((response) => {
         setSystemProperties((prevState) => ({ ...prevState, isLoading: false, isReset: false, items: response }))
      })
   }

   const resetList = () => {
      setSystemProperties({
         isLoading: true,
         isReset: true,
         items: [],
      })
   }

   return (
      <PropertiesContext.Provider
         value={{
            systemProperties,
            createProperties,
            selectedProperties,
            updateProperties,
            setUpdateProperties,
            setSelectedProperties,
            setCreateProperties,
            setSystemProperties,
            fetchSystemProperties,
            resetList,
         }}>
         {children}
      </PropertiesContext.Provider>
   )
}

export default PropertiesContextProvider
