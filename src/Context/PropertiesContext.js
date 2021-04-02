import { createContext, useState } from 'react'
import PropertiesController from '@Services/PropertiesController'

export const PropertiesContext = createContext()
export const PropertiesContextConsumer = PropertiesContext.Consumer

const PropertiesContextProvider = ({ children }) => {
   const [systemProperties, setSystemProperties] = useState({
      isLoading: true,
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

   const [selectedProperties, setSelectedProperties] = useState(null)

   const fetchSystemProperties = (ID) => {
      PropertiesController.detailSystemProperties(ID).then((response) => {
         setSystemProperties((prevState) => ({ ...prevState, isLoading: false, items: response }))
      })
   }

   return (
      <PropertiesContext.Provider
         value={{
            systemProperties,
            createProperties,
            selectedProperties,
            setSelectedProperties,
            setCreateProperties,
            setSystemProperties,
            fetchSystemProperties,
         }}>
         {children}
      </PropertiesContext.Provider>
   )
}

export default PropertiesContextProvider
