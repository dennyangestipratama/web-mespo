import { Component, Fragment } from 'react'

import Button from '@Components/Button'

import { ReactComponent as IconInfo } from '@Icon/info.svg'
import { ReactComponent as IconAttachment } from '@Icon/attachment.svg'
import { ReactComponent as IconSearch } from '@Icon/search.svg'
import { ReactComponent as IconAdd } from '@Icon/add.svg'
import { ReactComponent as IconCheck } from '@Icon/check.svg'
import { ReactComponent as IconMore } from '@Icon/more-vertical.svg'

export default class TabEnvironment extends Component {
   state = {
      isCheck: false,
      isCheckShapestone: false,
   }

   render() {
      const { isCheck, isCheckShapestone } = this.state
      const { setToggle, environment } = this.props
      return (
         <div className='tabSystem'>
            <div className='empty'>
               <IconInfo />
               <div className='title'>You don’t have any Environment. Create your first one below.</div>
            </div>
            <form>
               <label htmlFor='environment-name'>Environment Name</label>
               <input className='tabSystem__input' type='text' id='environment-name' placeholder='Environment Name' />
               <label htmlFor='environment-description'>Environment Description</label>
               <textarea className='tabSystem__input' id='environment-description' cols='30' rows='10' placeholder='Optional' />
               <label htmlFor='url'>URL</label>
               <input className='tabSystem__input' type='text' id='url' placeholder='https://' />
               <label htmlFor='environment-ID'>Environment ID</label>
               <input className='tabSystem__input' type='text' id='environment-ID' placeholder='Environment ID' />
               <div className='attachment'>
                  <div className='attachment__icon'>
                     <IconAttachment />
                  </div>
                  <div className='title'>Attach to System</div>
                  {environment ? (
                     <div className='info'>No System available</div>
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
                              <div className='wrapper' onClick={() => this.setState({ isCheckShapestone: !isCheckShapestone })}>
                                 {isCheckShapestone ? <IconCheck /> : null}
                              </div>
                              <div className={`item ${isCheckShapestone ? 'active' : ''}`}>
                                 <div className='title'>
                                    Shapestone <span>new</span>
                                 </div>
                                 <IconMore />
                              </div>
                           </div>
                           <div className='attachment__item'>
                              <div className='wrapper' onClick={() => this.setState({ isCheck: !isCheck })}>
                                 {isCheck ? <IconCheck /> : null}
                              </div>
                              <div className={`item ${isCheck ? 'active' : ''}`}>
                                 <div className='title'>Troumaka</div>
                                 <IconMore />
                              </div>
                           </div>
                        </Fragment>
                     )}
               </div>
            </form>
            <Button text='Create' style={{ marginRight: '31px' }} onClick={() => setToggle('isModalEnvironment')} />
         </div>
      )
   }
}
