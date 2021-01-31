import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { UtilsContext } from '@Context/UtilsContext'
import { NAVIGATION_TAB } from '@Utilities/Navigation'

import Mespo from '@Image/logo.png'
import MespoMini from '@Image/logo-mini.png'

import { ReactComponent as ArrowDown } from '@Icon/arrow-down.svg'
import { ReactComponent as ArrowUp } from '@Icon/arrow-up.svg'

export default function Navigation() {
   const utilsContext = useContext(UtilsContext)
   const [minimize, setMinimize] = useState({
      tabProperties: false,
      tabFeatures: false,
      tabAccounts: true,
   })

   const whichNav = (ID) => {
      switch (ID) {
         case 1:
            return minimize.tabProperties
         case 2:
            return minimize.tabFeatures
         case 3:
            return minimize.tabAccounts
         default:
            break
      }
   }

   const toggleNav = (ID) => {
      switch (ID) {
         case 1:
            return setMinimize((prevState) => ({ ...prevState, tabProperties: !minimize.tabProperties }))
         case 2:
            return setMinimize((prevState) => ({ ...prevState, tabFeatures: !minimize.tabFeatures }))
         case 3:
            return setMinimize((prevState) => ({ ...prevState, tabAccounts: !minimize.tabAccounts }))
         default:
            break
      }
   }

   return (
      <section className='navigation'>
         <img className={`navigation__logo ${!utilsContext.isMini ? '' : 'navigation__logo--mini'}`} src={utilsContext.isMini ? MespoMini : Mespo} alt='mespo' />
         <div className='navigation__tab'>
            {NAVIGATION_TAB.map((tabs) => {
               return (
                  <div key={tabs.ID} className='navigation__link'>
                     <div className={`navigation__link-title text__nav-title ${!utilsContext.isMini ? '' : 'navigation__link-title--mini'}`} onClick={() => toggleNav(tabs.ID)}>
                        <span>{tabs.title}</span>
                        {whichNav(tabs.ID) ? <ArrowDown /> : <ArrowUp />}
                     </div>
                     {!whichNav(tabs.ID) &&
                        tabs.tab.map((item) => {
                           return (
                              <NavLink
                                 to={item.href}
                                 className={`navigation__link-tab text__nav ${!utilsContext.isMini ? '' : 'navigation__link-tab--mini'}`}
                                 activeClassName={`navigation__link-tab text__nav--active ${!utilsContext.isMini ? '' : 'navigation__link-tab--mini'}`}>
                                 {item.icon}
                                 {utilsContext.isMini ? null : <span>{item.title}</span>}
                              </NavLink>
                           )
                        })}
                  </div>
               )
            })}
         </div>
      </section>
   )
}
