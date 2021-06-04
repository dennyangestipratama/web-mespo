import Ghost from '@Image/ghost.png'

export default function EmptyUser() {
   return (
      <div className='empty-users'>
         <span className='text__action-title empty-users__text'>If you don’t add users, boo-boo might decide to give you a scare..</span>
         <img src={Ghost} alt='users' />
      </div>
   )
}
