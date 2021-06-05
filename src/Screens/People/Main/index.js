import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { PeopleContext } from '@Context/PeopleContext'
import TableUsers from '@Components/TableUsers'
import ModalDelete from '@Components/ModalDelete'

import EmptyPeopleTab from './EmptyPeopleTab'
import EmptyPeople from './EmptyPeople'

import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'
import ModalUser from '../../../Components/ModalUser'

export default function Main() {
   const history = useHistory()
   const peopleContext = useContext(PeopleContext)
   const people = peopleContext.people

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
                              <EditSVG style={{ marginRight: 8 }} onClick={() => peopleContext.setSelectedUser(item)} />
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

         {!peopleContext.showModalUser ? null : (
            <ModalUser
               onClose={() => peopleContext.setShowModalUser(false)}
               onClickNo={() => peopleContext.setShowModalUser(false)}
               onClickYes={() => peopleContext.setShowModalUser(false)}
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
               onClose={() => peopleContext.setShowDelete(false)}
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
