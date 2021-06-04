import { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { UserContext } from '@Context/UserContext'

import EmptyUserTab from './EmptyUserTab'
import EmptyUser from './EmptyUser'

export default function Main() {
   const history = useHistory()
   const params = useParams()
   const userContext = useContext(UserContext)
   const user = userContext.user

   return (
      <section className='main main-user'>
         <h3>Users</h3>
         <div className='main__sub'>
            <div className='main__sub-title text__sub-title'>Add User</div>
            <EmptyUserTab history={history} />
         </div>

         <EmptyUser />
      </section>
   )
}
