import { Fragment } from 'react'
import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as ArrowStraight } from '@Icon/arrow-straight.svg'

export default function EmptyPeopleTab({ history, onClick }) {
   return (
      <Fragment>
         <IconAdd className='main__icon-add' onClick={onClick} />
         <ArrowStraight className='main__icon-arrow' />
         <div className='text__action'>Add a user here</div>
      </Fragment>
   )
}
