import { NavLink } from 'react-router-dom'

import { ReactComponent as IconPhone } from '@Icon/phone.svg'
import { ReactComponent as IconFeature } from '@Icon/feature.svg'
import { ReactComponent as IconToggles } from '@Icon/toggles-off.svg'
import { ReactComponent as IconAccount } from '@Icon/account.svg'

const NavigationMobile = () => {
   return (
      <div className='navigation--mobile'>
         <NavLink
            to='/system'
            className='icon'
            activeClassName='icon--active'
            exact={true}
            isActive={(match, location) => {
               if (location.pathname.includes('create')) return true
               if (location.pathname.includes('system')) return true
            }}>
            <IconPhone />
         </NavLink>
         <NavLink to='/features' className='icon' activeClassName='icon--active'>
            <IconFeature />
         </NavLink>
         <NavLink to='/toggles' className='icon' activeClassName='icon--active'>
            <IconToggles />
         </NavLink>
         <NavLink to='/account' className='icon' activeClassName='icon--active'>
            <IconAccount />
         </NavLink>
      </div>
   )
}

export default NavigationMobile