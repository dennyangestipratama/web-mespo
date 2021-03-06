import { createContext, useState } from 'react'
import moment from 'moment'

export const PeopleContext = createContext()

const PeopleContextProvider = ({ children }) => {
   const [people, setPeople] = useState({
      isLoading: false,
      items: [
         {
            ID: 1,
            username: 'Jonna',
            first_name: 'John',
            last_name: 'Rambo',
            created: '12 June 2021',
            email: 'jonna@gmail.com',
         },
         {
            ID: 2,
            username: 'Denny',
            first_name: 'Bruce',
            last_name: 'Willis',
            created: '12 June 2021',
            email: 'denny@gmail.com',
         },
         {
            ID: 3,
            username: 'Dea',
            first_name: 'Michael',
            last_name: 'Angelo',
            created: '12 June 2021',
            email: 'dea@gmail.com',
         },
      ],
   })

   const [createUser, setCreateUser] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         username: '',
         first_name: '',
         last_name: '',
         email: '',
         created: '6 June 2021',
      },
   })

   const [updateUser, setUpdateUser] = useState({
      isSubmit: false,
      data: null,
      parameters: {
         username: '',
         first_name: '',
         last_name: '',
         email: '',
         created: moment().format('DD MMM YYYY'),
      },
   })

   const [showDelete, setShowDelete] = useState(false)
   const [showSuccess, setShowSuccess] = useState(false)
   const [showModalUser, setShowModalUser] = useState(false)
   const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
   const [selectedUser, setSelectedUser] = useState(null)
   const [deleteUser, setDeleteUser] = useState({
      isSubmit: false,
      keyword: '',
   })

   return (
      <PeopleContext.Provider
         value={{
            people,
            showDelete,
            showModalUser,
            showModalUpdateUser,
            showSuccess,
            selectedUser,
            deleteUser,
            createUser,
            updateUser,
            setShowDelete,
            setShowModalUser,
            setShowModalUpdateUser,
            setSelectedUser,
            setDeleteUser,
            setUpdateUser,
            setPeople,
            setShowSuccess,
            setCreateUser,
         }}>
         {children}
      </PeopleContext.Provider>
   )
}

export default PeopleContextProvider
