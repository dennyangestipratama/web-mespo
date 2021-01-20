import { Link } from 'react-router-dom'

import Search from '@Components/Search'
import { ReactComponent as Close } from '@Icon/close.svg'
import { ReactComponent as Arrow } from '@Icon/arrow.svg'
import { ReactComponent as Add } from '@Icon/add.svg'

export default function EmptyAction({ placeholder, onChange, value, to, label, content, src }) {
   return (
      <section className='empty-action'>
         <Close className='empty-action__close' />
         <div className="empty-action__search">
            <Search value={value} onChange={onChange} placeholder={placeholder} />
            <Link to={to}><Add /></Link>
         </div>
         <div className="empty-action__info">
            <span className='text__action'>{label}</span>
            <Arrow />
         </div>
         <div className="empty-action__content">
            <span className='text__action-title'>{content}</span>
            <img src={src} alt="empty-icon" />
         </div>
      </section>
   )
}
