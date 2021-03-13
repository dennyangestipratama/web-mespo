import { useContext, useEffect, useState, Fragment } from 'react'

import Search from '@Components/Search'
import { SystemContext } from '@Context/SystemContext'
import { EnvironmentContext } from '@Context/EnvironmentContext'

import AddProperties from '@Image/add-properties.png'
import { ReactComponent as IconInfo } from '@Icon/info.svg'
import { ReactComponent as IconMenu } from '@Icon/menu.svg'
import { ReactComponent as IconArrowUp } from '@Icon/arrow-up.svg'
import { ReactComponent as IconArrowDown } from '@Icon/arrow-down.svg'
import { ReactComponent as IconAdd } from '@Icon/add-white.svg'
import { ReactComponent as IconUpload } from '@Icon/upload.svg'
import { ReactComponent as IconClose } from '@Icon/close-red.svg'

export default function Properties() {
   const systemContext = useContext(SystemContext)
   const system = systemContext.detailSystem.data

   const [showMenu, setShowMenu] = useState(true)
   const [showProperties, setShowProperties] = useState(true)

   return (
      <section className='properties'>
         <div className="properties__search">
            <Search placeholder={'Search Properties'} />
         </div>
         <div className="properties__header">
            <div className="properties__header__title">
               <h2 className="text__properties-title">{`${system?.name ?? ''} Properties`}</h2>
               <IconInfo />
            </div>
            <div className="properties__header__menu">
               <button className="properties__menu-btn" onClick={() => setShowMenu(!showMenu)}>
                  <IconMenu />
                  <span className="text__properties-menu">Menu</span>
               </button>
            </div>
            <div className="properties__header__info">
               <span className="text__properties-number">1</span>
               <span className="text__properties-info">Properties</span>
               {showProperties ? <IconArrowUp onClick={() => setShowProperties(!showProperties)} /> : <IconArrowDown onClick={() => setShowProperties(!showProperties)} />}
            </div>
         </div>
         {!showProperties ? null :
            <Fragment>
               {!showMenu ? null :
                  <div className="properties__menu__action">
                     <div className="properties__menu__wrapper">
                        <button className="properties__menu-item">
                           <IconAdd />
                           <span className="text__properties-item">Add a Property</span>
                        </button>
                        <button className="properties__menu-item">
                           <IconUpload />
                           <span className="text__properties-item">Upload Properties</span>
                        </button>
                        <button className="properties__menu-item">
                           <IconClose />
                           <span className="text__properties-item">Clear all</span>
                        </button>
                     </div>
                     <button className="properties__menu-save">Save Changes</button>
                  </div>
               }
               <div className="properties__body-empty">
                  <img src={AddProperties} alt="add properties" />
                  <p className="text__properties-empty">Add your properties here</p>
                  <span className="text__properties-empty--info">By manually add a property or upload your  file.</span>
               </div>
            </Fragment>
         }
      </section>
   )
}
