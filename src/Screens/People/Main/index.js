import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { PeopleContext } from '@Context/PeopleContext'
import TableUsers from '@Components/TableUsers'
import ModalDelete from '@Components/ModalDelete'
import ModalUser from '@Components/ModalUser'
import ModalUpdateUser from '@Components/ModalUpdateUser'

import EmptyPeopleTab from './EmptyPeopleTab'
import EmptyPeople from './EmptyPeople'

import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'
import { ReactComponent as SuccessSVG } from '@Icon/success.svg'

export default function Main() {
   const history = useHistory()
   const peopleContext = useContext(PeopleContext)
   const people = peopleContext.people

   const handleSubmit = (event) => {
      event.preventDefault()
      peopleContext.setPeople((prevState) => ({ ...prevState, items: [...prevState.items, peopleContext.createUser.parameters] }))
      peopleContext.setShowSuccess(true)
   }

   const handleUpdate = (event, key, ID) => {
      event.preventDefault()
      let newArr = people.items.map((item) => {
         if (ID == item.ID) {
            return { ...item, [key]: event.target.value }
         } else {
            return item
         }
      })
      peopleContext.setPeople(newArr)
      peopleContext.setShowSuccess(true)
   }

   useEffect(() => {
      if (peopleContext.showSuccess) {
         setTimeout(() => {
            peopleContext.setShowSuccess(false)
         }, 3000)
      }
   }, [peopleContext.showSuccess])

   return (
      <section className='main main-user'>
         <h3>People</h3>
         <div className='main__sub'>
            <div className='main__sub-title text__sub-title'>Add User</div>
            <EmptyPeopleTab history={history} onClick={() => peopleContext.setShowModalUser(true)} />
         </div>
         {people.items.length === 0 ? (
            <EmptyPeople />
         ) : (
            <div className='users__content'>
               <TableUsers
                  items={people.items.map((item) => {
                     return (
                        <div key={item.ID}>
                           <div className='table__header --menu'></div>
                           <div className='table__body --title'>{item.username}</div>
                           <div className='table__body --title'>{item.first_name}</div>
                           <div className='table__body --title'>{item.last_name}</div>
                           <div className='table__body --title'>{item.created}</div>
                           <div className='table__body --title'>{item.email}</div>
                           <div className='table__body --action flex' style={{ position: 'relative' }}>
                              <EditSVG
                                 style={{ marginRight: 8 }}
                                 onClick={() => {
                                    peopleContext.setUpdateUser((prev) => ({
                                       ...prev,
                                       parameters: {
                                          username: item.username,
                                          first_name: item.first_name,
                                          last_name: item.last_name,
                                          email: item.email,
                                       },
                                    }))
                                    peopleContext.setShowModalUpdateUser(true)
                                 }}
                              />
                              <DeleteSVG
                                 onClick={() => {
                                    peopleContext.setSelectedUser(item)
                                    peopleContext.setShowDelete(true)
                                 }}
                              />
                           </div>
                        </div>
                     )
                  })}
               />
            </div>
         )}

         {!peopleContext.showSuccess ? null : (
            <div className='modal-user__success'>
               <SuccessSVG />
               <div className='modal-user__success-text'>
                  <span style={{ fontWeight: 'bold' }}>{peopleContext.createUser.parameters.username} </span>
                  <span>is successfully added to Users !</span>
               </div>
            </div>
         )}

         {!peopleContext.showModalUser ? null : (
            <ModalUser
               onClose={() => peopleContext.setShowModalUser(false)}
               onClickNo={() => peopleContext.setShowModalUser(false)}
               onClickYes={(event) => {
                  peopleContext.setShowModalUser(false)
                  handleSubmit(event)
               }}
               onSubmit={handleSubmit}
            />
         )}

         {!peopleContext.showModalUpdateUser ? null : (
            <ModalUpdateUser
               onClose={() => peopleContext.setShowModalUpdateUser(false)}
               onClickNo={() => peopleContext.setShowModalUpdateUser(false)}
               onClickYes={(event) => {
                  peopleContext.setShowModalUpdateUser(false)
                  handleUpdate(event)
               }}
               onSubmit={handleUpdate}
            />
         )}

         {!peopleContext.showDelete ? null : (
            <ModalDelete
               title={peopleContext.selectedUser.username}
               text='You are about to delete a user :'
               desc='To continue, type the user name below.'
               placeholder={peopleContext.selectedUser.username}
               value={peopleContext.deleteUser.keyword}
               onChange={({ target: { value } }) => peopleContext.setDeleteUser((prevState) => ({ ...prevState, keyword: value }))}
               label={peopleContext.deleteUser.isSubmit ? 'Please wait...' : 'Delete User'}
               onClose={() => {
                  peopleContext.setShowDelete(false)
                  peopleContext.setDeleteUser((prevState) => ({ ...prevState, keyword: '' }))
               }}
               disabled={peopleContext.selectedUser.username !== peopleContext.deleteUser.keyword}
               // onClick={() => {
               //    systemContext.setDeleteSystem((prevState) => ({ ...prevState, isSubmit: true }))
               //    setTimeout(() => {
               //       systemContext.deletingSystem(systemContext.showDelete?.systemId, { version: systemContext.showDelete?.version })
               //       history.push('/system-environment')
               //    }, 500)
               // }}
            />
         )}
      </section>
   )
}
