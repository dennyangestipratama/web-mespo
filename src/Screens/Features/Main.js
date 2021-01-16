import { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

import MainEmpty from '@Screens/Features/Components/MainEmpty'
import ModalUpload from '@Components/ModalUpload'
import { MOBILE_VIEW } from '@Utilities'
import { ModalAction } from '@Components/ModalOption'

import ArrowLeft from '@Image/arrow-left.png'
import { ReactComponent as IconWindow } from '@Icon/window.svg'
import { ReactComponent as IconMenuMobile } from '@Icon/menu-mobile.svg'
import { ReactComponent as IconMenu } from '@Icon/menu.svg'
import { ReactComponent as IconMore } from '@Icon/more.svg'
import { ReactComponent as IconArrowLeft } from '@Icon/arrow-left.svg'
import { ReactComponent as IconArrowDown } from '@Icon/arrow-down.svg'
import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as IconCopy } from '@Icon/copy.svg'
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
   }

   render() {
      const { showProperties, showMenu, properties } = this.state
      const { isNavigation, systems, setToggle, setType, selectedSystem, isModalUpload, showProperty, showOptionProperty } = this.props
      const system = systems.filter((filter) => filter.ID === selectedSystem)

      return isNavigation ? null : (
         <div className='main'>
            <div className='main__header'>
               <div className='wrapper'>
                  <div className='title'>Feature</div>
                  <div className='capsule' onClick={() => setToggle('isClose')}>
                     <IconArrowLeft />
                     {!selectedSystem ? <div className='title'>Select Feature</div> : <div className='title active'>{system[0]?.name}</div>}
                  </div>
               </div>
               {!selectedSystem || MOBILE_VIEW ? null : (
                  <div className='main__header__info'>
                     <div className='desc'>
                        <div className='title'>Description</div>
                        <div className='info'>{system[0]?.description}</div>
                     </div>
                     <div className='id'>
                        <div className='title'>System ID</div>
                        <div className='info'>
                           <span>{system[0]?.ID}</span>
                           <div>
                              <IconCopy />
                              <span>Copy</span>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
               {MOBILE_VIEW ? <IconMenuMobile onClick={() => setToggle('isNavigation')} /> : <IconWindow />}
            </div>
            <div className='main__filter'>
               <div className='title'>Filter</div>
            </div>
            <div className='main__body'>
               {!selectedSystem ? null : (
                  <Fragment>
                     <div className='search'>
                        <input type='text' placeholder='Search Properties' />
                        <IconSearch />
                     </div>
                     <div className='main__body__header'>
                        <div className='title'>
                           <span>{`${system[0]?.name} Properties`}</span>
                           <IconInfo />
                        </div>
                        <div className='menu' onClick={() => this.setState({ showMenu: !showMenu })}>
                           <IconMenu />
                           {MOBILE_VIEW ? null : <span>Menu</span>}
                        </div>
                        <div className='--action'>
                           {MOBILE_VIEW ? null : (
                              <Fragment>
                                 <span>{properties.length}</span>
                                 <span>Properties</span>
                              </Fragment>
                           )}
                           {showProperties ? <IconDropdownUp onClick={() => this.setState({ showProperties: !showProperties })} /> : <IconDropdown onClick={() => this.setState({ showProperties: !showProperties })} />}
                        </div>
                     </div>
                     {!showMenu ? null : (
                        <div className='main__body__action'>
                           <div className='action--button'>
                              <div>
                                 <IconAddWhite />
                                 <span>Add a Property</span>
                              </div>
                              <div onClick={() => setToggle('isModalUpload')}>
                                 <IconUpload />
                                 <span>Upload Properties</span>
                              </div>
                              <div>
                                 <IconClose />
                                 <span>Clear All</span>
                              </div>
                           </div>
                        </div>
                     )}
                     {!showProperties ? null : !properties ? (
                        <MainEmpty />
                     ) : (
                           <div className='main__body__content'>
                              <div className="table">
                                 <div className='table__header --menu'></div>
                                 <div className='table__header'>Name</div>
                                 <div className='table__header'>Value Type</div>
                                 <div className='table__header'>Value</div>
                                 <div className='table__header'></div>
                                 {properties.map(property => {
                                    return (
                                       <Fragment key={property.ID}>
                                          <div className='table__body --menu'><IconMenu /></div>
                                          <div className='table__body --title'>{property.name}</div>
                                          <div className='table__body --title'>{property.type} <span><IconArrowDown /></span></div>
                                          <div className='table__body --title'>{property.value}</div>
                                          <div className='table__body --action' style={{ position: 'relative' }}>
                                             <IconMore style={{ height: '25px' }} onClick={() => showProperty(property.ID)} />
                                             {showOptionProperty === property.ID ? <ModalAction title={'Property Action'} setToggle={setToggle} setType={setType} showProperty={showProperty} id={property.ID} /> : null}
                                          </div>
                                       </Fragment>
                                    )
                                 })}
                              </div>
                           </div>
                        )}
                     {!isModalUpload ? null : <ModalUpload />}
                  </Fragment>
               )}
            </div>
         </div>
      )
   }
}
