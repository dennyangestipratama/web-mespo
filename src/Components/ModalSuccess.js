export default function ModalSuccess({ icon, desc, title, text, text_title, button }) {
   return (
      <div className='modal-success'>
         {icon}
         <div className='modal-success__title text__success-title'>
            <span>{text_title}</span>
            <span className='text__success-title--active'>
               &nbsp;{title}
               <br />
            </span>
            <span>{text}</span>
         </div>
         <div className='modal-success__desc text__success-desc'>{desc}</div>
         <div className='modal-success__btn'>{button}</div>
      </div>
   )
}
