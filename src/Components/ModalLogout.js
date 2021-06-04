import Button from '@Components/Button'
import { ReactComponent as LogoutSVG } from '@Icon/logout-big.svg'

export default function ModalLogout({ onClickYes, onClickNo }) {
   return (
      <div className='modal-logout'>
         <LogoutSVG />
         <div className='modal-delete__title text__delete-title'>
            <span>Are you sure you want to Log Out?</span>
         </div>
         <div className='modal-logout__action'>
            <Button type='submit' size='full' variant='secondary' border='1px solid #3776FF' label='No' onClick={onClickNo} />
            <Button type='submit' size='full' variant='primary' border='1px solid #3776FF' label='Yes' onClick={onClickYes} />
         </div>
      </div>
   )
}
