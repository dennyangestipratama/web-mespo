import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'

export default function ModalDelete({ desc, title, text, value, onChange, onClick, placeholder, label, disabled }) {
   return (
      <div className='modal-delete'>
         <DeleteSVG />
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
