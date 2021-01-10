import { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { MOBILE_VIEW } from '@Utilities'

import Mespo_Logo from '@Image/logo.png'
import { ReactComponent as IconDropdown } from '@Icon/dropdown.svg'
import { ReactComponent as IconDropdownUp } from '@Icon/dropdown-up.svg'
import { ReactComponent as IconPhone } from '@Icon/phone.svg'
import { ReactComponent as IconFeature } from '@Icon/feature.svg'
import { ReactComponent as IconToggles } from '@Icon/toggles-off.svg'
import { ReactComponent as IconPeople } from '@Icon/people.svg'
import { ReactComponent as IconAccount } from '@Icon/account.svg'
import { ReactComponent as IconHat } from '@Icon/hat.svg'
import { ReactComponent as IconClose } from '@Icon/close.svg'

const Navigation = ({ setToggle }) => {
   const [showProperties, setShowProperties] = useState(true)
   const [showFeatures, setShowFeatures] = useState(true)
   const [showAccount, setShowAccount] = useState(true)

   return (
      <div className='navigation'>
         <div className='navigation--logo'>
            <img src={Mespo_Logo} alt='mespo-logo' />
            {MOBILE_VIEW ? <IconClose onClick={() => setToggle('isNavigation')} /> : null}
         </div>
         <div className='navigation__wrapper'>
            <div className='navigation__header' onClick={() => setShowProperties(!showProperties)}>
               <div className='title'>Dynamic Properties</div>
               {showProperties ? <IconDropdownUp /> : <IconDropdown />}
            </div>
            {!showProperties ? null : (
               <NavLink
                  to='/system'
                  className='navigation__content'
                  activeClassName='navigation__content--active'
                  isActive={(match, location) => {
                     if (location.pathname.includes('create')) return true
                     if (location.pathname.includes('system')) return true
                  }}>
                  <IconPhone />
                  <div className='title'>System Environment</div>
               </NavLink>
            )}
         </div>
         <div className='navigation__wrapper'>
            <div className='navigation__header' onClick={() => setShowFeatures(!showFeatures)}>
               <div className='title'>Features & Toggles</div>
               {showFeatures ? <IconDropdownUp /> : <IconDropdown />}
            </div>
            {!showFeatures ? null : (
               <Fragment>
                  <NavLink to='/features' className='navigation__content' activeClassName='navigation__content--active'>
                     <IconFeature />
                     <div className='title'>Features</div>
                  </NavLink>
                  <NavLink to='/toggles' className='navigation__content' activeClassName='navigation__content--active'>
                     <IconToggles />
                     <div className='title'>Toggles</div>
                  </NavLink>
               </Fragment>
            )}
         </div>
         <div className='navigation__wrapper'>
            <div className='navigation__header' onClick={() => setShowAccount(!showAccount)}>
               <div className='title'>Accounts</div>
               {showAccount ? <IconDropdownUp /> : <IconDropdown />}
            </div>
            {!showAccount ? null : (
               <Fragment>
                  <NavLink to='/account' className='navigation__content' activeClassName='navigation__content--active'>
                     <IconAccount />
                     <div className='title'>Me</div>
                  </NavLink>
                  <NavLink to='/people' className='navigation__content' activeClassName='navigation__content--active'>
                     <IconPeople />
                     <div className='title'>People</div>
                  </NavLink>
                  <NavLink to='/roles' className='navigation__content' activeClassName='navigation__content--active'>
                     <IconHat />
                     <div className='title'>Roles</div>
                  </NavLink>
               </Fragment>
            )}
         </div>
      </div>
   )
}

export default Navigation