import { Fragment, Component } from 'react'

import MainEmpty from '@Screens/Toggles/Components/MainEmpty'
import ModalUpload from '@Components/ModalUpload'
import { MOBILE_VIEW } from '@Utilities'

import { ReactComponent as IconWindow } from '@Icon/window.svg'
import { ReactComponent as IconMenuMobile } from '@Icon/menu-mobile.svg'
import { ReactComponent as IconMenu } from '@Icon/menu.svg'
import { ReactComponent as IconArrowDown } from '@Icon/arrow-down.svg'
import { ReactComponent as IconObject } from '@Icon/object.svg'
import { ReactComponent as IconList } from '@Icon/list.svg'
import { ReactComponent as IconToggle } from '@Icon/toggle.svg'
import { ReactComponent as IconSearch } from '@Icon/search.svg'
import { ReactComponent as IconDropdownUp } from '@Icon/dropdown-up.svg'
import { ReactComponent as IconDropdown } from '@Icon/dropdown.svg'
import { ReactComponent as IconInfo } from '@Icon/info.svg'
import { ReactComponent as IconAddWhite } from '@Icon/add-white.svg'
import { ReactComponent as IconUpload } from '@Icon/upload.svg'
import { ReactComponent as IconClose } from '@Icon/close-red.svg'

export default class Main extends Component {
   state = {
      showProperties: true,
      showMenu: true,
      properties: [
         {
            ID: 1,
            name: 'secure.data.storage.aws.kms.secret.key',
            type: 'string',
            value: '<!TYPE this is value> = sda',
         },
         {
            ID: 2,
            name: 'secure.data.storage.aws.kms.secret.key',
            type: 'string',
            value: '<!TYPE this is value> = sda',
         },
         {
            ID: 3,
            name: 'secure.data.storage.aws.kms.secret.key',
            type: 'string',
            value: '<!TYPE this is value> = sda',
         },
      ],

      capsules: [
         {
            ID: 1,
            title: 'All Features'
         },
         {
            ID: 2,
            title: 'All Status'
         },
         {
            ID: 3,
            title: 'All System'
         },
         {
            ID: 4,
            title: 'All Environment'
         },
      ]
   }

   render() {
      const { showProperties, showMenu, properties, capsules } = this.state
      const { isNavigation, toggles, setToggle, setType, selectedToggle, isModalUpload } = this.props
      const toggleFilter = toggles.filter((filter) => filter.ID === selectedToggle)

      return isNavigation ? null : (
         <div className='main'>
            <div className='main__header toggles__header'>
               <div className="main__title">Toggle List</div>
               {MOBILE_VIEW ? <IconMenuMobile onClick={() => setToggle('isNavigation')} /> : <IconWindow />}
            </div>
            <div className='main__filter'>
               <div className='title'>Filter</div>
               <div className="toggles__capsules">
                  {capsules.map(capsule => {
                     return (
                        <div className="capsule">
                           <div>{capsule.title}</div>
                           <IconArrowDown />
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className='main__body'>
               <div className="toggles__body">
                  <div className='search'>
                     <input type='text' placeholder='Search Toggle' />
                     <IconSearch />
                  </div>
                  <div className="toggles__btn">
                     <div className="toggles__body__action">
                        <IconObject />
                     </div>
                     <div className="toggles__body__action">
                        <IconList />
                     </div>
                     <button className="toggles__body__btn">
                        <IconToggle />
                        <div>Add a Toggle</div>
                     </button>
                  </div>
               </div>
               <MainEmpty />
            </div>
         </div>
      )
   }
}
