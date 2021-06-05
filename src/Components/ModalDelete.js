import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'
import { ReactComponent as CloseSVG } from '@Icon/close.svg'

export default function ModalDelete({ desc, title, text, value, onChange, onClick, placeholder, label, disabled, onClose }) {
   return (
      <div className='modal-delete'>
         <DeleteSVG className='modal-delete__icon' />
         <CloseSVG className='modal-delete__close' onClick={onClose} />
         <div className='modal-delete__title text__delete-title'>
            <span>{text}</span>
            <br />
            <span className='text__delete-title--active'>{title}</span>
         </div>
         <div className='modal-delete__desc text__delete-desc'>{desc}</div>
         <input type='text' value={value} onChange={onChange} placeholder={placeholder} />
         <button disabled={disabled} onClick={onClick} className='modal-delete__btn'>
            {label}
         </button>
      </div>
   )
}
