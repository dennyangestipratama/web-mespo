import { Fragment } from 'react'
import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as ArrowStraight } from '@Icon/arrow-straight.svg'

export default function EmptyEnvironment({ history }) {
   return (
      <Fragment>
         <IconAdd className='main__icon-add' onClick={() => history.push('/system-environment/create/environment')} />
         <ArrowStraight className='main__icon-arrow' />
         <div className='text__action'>or create environment first here.</div>
      </Fragment>
   )
}
