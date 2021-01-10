import { Component, Fragment } from 'react'

import Button from '@Components/Button'

import { ReactComponent as IconInfo } from '@Icon/info.svg'
import { ReactComponent as IconAttachment } from '@Icon/attachment.svg'
import { ReactComponent as IconSearch } from '@Icon/search.svg'
import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as IconCheck } from '@Icon/check.svg'
import { ReactComponent as IconMore } from '@Icon/more-vertical.svg'

export default class TabSystem extends Component {
   state = {
      checkSSStag: false,
      checkTrouProd: false,
      checkTrouStag: false,
   }
   render() {
      const { checkSSStag, checkTrouProd, checkTrouStag } = this.state
      const { systems, setToggle } = this.props
      return (
         <div className='tabSystem'>
            <div className='empty'>
               <IconInfo />
               <div className='title'>You don’t have any System. Create your first one below.</div>
            </div>
            <form>
               <label htmlFor='system-name'>System Name</label>
               <input className='tabSystem__input' type='text' id='system-name' placeholder='System Name' />
               <label htmlFor='system-description'>System Description</label>
               <textarea className='tabSystem__input' id='system-description' cols='30' rows='10' placeholder='Optional' />
               <label htmlFor='url'>URL</label>
               <input className='tabSystem__input' type='text' id='url' placeholder='https://' />
               <label htmlFor='system-ID'>System ID</label>
               <input className='tabSystem__input' type='text' id='system-ID' placeholder='System ID' />
               <div className='attachment'>
                  <div className='attachment__icon'>
                     <IconAttachment />
                  </div>
                  <div className='title'>Attach to Environment</div>
                  {systems ? (
                     <div className='info'>No Environment available</div>
                  ) : (
                        <Fragment>
                           <div className='attachment__search'>
                              <div className='wrapper'>
                                 <input type='text' placeholder='Search System' />
                                 <IconSearch />
                              </div>
                              <IconAdd />
                           </div>
                           <div className='attachment__item'>
                              <div className='wrapper' onClick={() => this.setState({ checkSSStag: !checkSSStag })}>
                                 {checkSSStag ? <IconCheck /> : null}
                              </div>
                              <div className={`item ${checkSSStag ? 'active' : ''}`}>
                                 <div className='title'>
                                    SS_staging <span>new</span>
                                 </div>
                                 <IconMore />
                              </div>
                           </div>
                           <div className='attachment__item'>
                              <div className='wrapper' onClick={() => this.setState({ checkTrouProd: !checkTrouProd })}>
                                 {checkTrouProd ? <IconCheck /> : null}
                              </div>
                              <div className={`item ${checkTrouProd ? 'active' : ''}`}>
                                 <div className='title'>Trou_prod</div>
                                 <IconMore />
                              </div>
                           </div>
                           <div className='attachment__item'>
                              <div className='wrapper' onClick={() => this.setState({ checkTrouStag: !checkTrouStag })}>
                                 {checkTrouStag ? <IconCheck /> : null}
                              </div>
                              <div className={`item ${checkTrouStag ? 'active' : ''}`}>
                                 <div className='title'>Trou_staging</div>
                                 <IconMore />
                              </div>
                           </div>
                        </Fragment>
                     )}
               </div>
            </form>
            <Button text='Create' style={{ marginRight: '31px' }} onClick={() => setToggle('isModalSystem')} />
         </div>
      )
   }
}
