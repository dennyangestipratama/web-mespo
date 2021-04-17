import { useContext, useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import Search from '@Components/Search'
import Table from '@Components/Table'
import TableForm from '@Components/TableForm'
import EmptyProperties from './EmptyProperties'
import ModalPropertyAction from '@Components/ModalPropertyAction'
import ButtonAction from '@Components/ButtonAction'

import PropertiesController from '@Services/PropertiesController'
import { SystemContext } from '@Context/SystemContext'
import { PropertiesContext } from '@Context/PropertiesContext'

import { ReactComponent as IconInfo } from '@Icon/info.svg'
import { ReactComponent as IconMenu } from '@Icon/menu.svg'
import { ReactComponent as IconMore } from '@Icon/more.svg'
import { ReactComponent as IconArrowUp } from '@Icon/arrow-up.svg'
import { ReactComponent as IconArrowDown } from '@Icon/arrow-down.svg'
import { ReactComponent as IconAdd } from '@Icon/add-white.svg'
import { ReactComponent as IconUpload } from '@Icon/upload.svg'
import { ReactComponent as IconClose } from '@Icon/close-red.svg'
import { ReactComponent as EditSVG } from '@Icon/edit.svg'
import { ReactComponent as DeleteSVG } from '@Icon/delete.svg'

export default function Properties() {
   const params = useParams()
   const systemContext = useContext(SystemContext)
   const system = systemContext.detailSystem.data

   const propertiesContext = useContext(PropertiesContext)
   const properties = propertiesContext.systemProperties

   const [showMenu, setShowMenu] = useState(true)
   const [showProperties, setShowProperties] = useState(true)
   const [showCreate, setShowCreate] = useState(false)
   const [showUpdate, setShowUpdate] = useState(false)

   useEffect(() => {
      propertiesContext.fetchSystemProperties(params.id ?? systemContext.selectedSystem)
   }, [systemContext.selectedSystem, propertiesContext.systemProperties.isReset])

   const create = () => {
      PropertiesController.createProperties({ systemId: systemContext.selectedSystem, ...propertiesContext.createProperties.params })
         .then((response) => {
            propertiesContext.setCreateProperties((prevState) => ({
               ...prevState,
               data: response,
               isSubmit: false,
               params: { ...prevState.params, name: '', value: '', valueType: '' },
            }))
         })
         .catch(() => {
            propertiesContext.setCreateProperties((prevState) => ({ ...prevState, isSubmit: false, params: { ...prevState.params, name: '', value: '', valueType: '' } }))
         })
   }

   const update = () => {
      PropertiesController.updateSystemProperties(propertiesContext.selectedProperties.systemPropertyValueId, { ...propertiesContext.updateProperties.params })
         .then((response) => {
            propertiesContext.setUpdateProperties((prevState) => ({
               ...prevState,
               data: response,
               isSubmit: false,
            }))
         })
         .catch(() => {
            propertiesContext.setUpdateProperties((prevState) => ({ ...prevState, isSubmit: false }))
         })
   }

   const updatePropertiesValue = () => {
      propertiesContext.setUpdateProperties((prevState) => ({
         ...prevState,
         params: {
            name: propertiesContext.selectedProperties.name,
            systemId: propertiesContext.selectedProperties.systemId,
            propertyId: propertiesContext.selectedProperties.propertyId,
            propertyTypeId: propertiesContext.selectedProperties.propertyTypeId,
            value: propertiesContext.selectedProperties.value,
            valueType: propertiesContext.selectedProperties.valueType,
            version: propertiesContext.selectedProperties.version,
            ownerPartyId: propertiesContext.selectedProperties.ownerPartyId,
            valueVersion: propertiesContext.selectedProperties.valueVersion,
         },
      }))
      setShowUpdate(!showUpdate)
   }

   const deleteProperties = () => {
      PropertiesController.deleteProperties(propertiesContext.selectedProperties.systemPropertyValueId, {
         valueVersion: propertiesContext.selectedProperties.valueVersion,
         propertyId: propertiesContext.selectedProperties.propertyId,
         propertyVersion: propertiesContext.selectedProperties.version,
      })
         .then((response) => {
            propertiesContext.resetList()
            propertiesContext.setSelectedProperties(null)
         })
         .catch(() => alert('failed'), propertiesContext.setSelectedProperties(null))
   }

   const submit = (event) => {
      event.preventDefault()
      propertiesContext.setCreateProperties((prevState) => ({ ...prevState, isSubmit: true }))
      propertiesContext.resetList()
      create()
      setShowCreate(false)
   }

   const submitUpdate = (event) => {
      event.preventDefault()
      propertiesContext.setUpdateProperties((prevState) => ({ ...prevState, isSubmit: true }))
      propertiesContext.resetList()
      update()
      setShowUpdate(false)
      propertiesContext.setSelectedProperties(null)
   }

   return (
      <section className='properties'>
         <div className='properties__search'>
            <Search placeholder={'Search Properties'} />
         </div>
         <div className='properties__header'>
            <div className='properties__header__title'>
               <h2 className='text__properties-title'>{`${system?.name ?? ''} Properties`}</h2>
               <IconInfo />
            </div>
            <div className='properties__header__menu'>
               <button className='properties__menu-btn' onClick={() => setShowMenu(!showMenu)}>
                  <IconMenu />
                  <span className='text__properties-menu'>Menu</span>
               </button>
            </div>
            <div className='properties__header__info'>
               <span className='text__properties-number'>{properties.items.length ?? 0}</span>
               <span className='text__properties-info'>Properties</span>
               {showProperties ? <IconArrowUp onClick={() => setShowProperties(!showProperties)} /> : <IconArrowDown onClick={() => setShowProperties(!showProperties)} />}
            </div>
         </div>
         {!showProperties ? null : (
            <Fragment>
               {!showMenu ? null : (
                  <div className='properties__menu__action'>
                     <div className='properties__menu__wrapper'>
                        <button className='properties__menu-item' onClick={() => setShowCreate(!showCreate)}>
                           <IconAdd />
                           <span className='text__properties-item'>Add a Property</span>
                        </button>
                        <button className='properties__menu-item'>
                           <IconUpload />
                           <span className='text__properties-item'>Upload Properties</span>
                        </button>
                        <button className='properties__menu-item'>
                           <IconClose />
                           <span className='text__properties-item'>Clear all</span>
                        </button>
                     </div>
                     {!showCreate ? null : (
                        <button
                           type='submit'
                           className={`properties__menu-save ${
                              propertiesContext.createProperties.params.name !== '' &&
                              propertiesContext.createProperties.params.value !== '' &&
                              propertiesContext.createProperties.params.valueType !== ''
                                 ? 'properties__menu-save--active'
                                 : ''
                           }`}
                           onClick={(event) => submit(event)}>
                           {!propertiesContext.createProperties.isSubmit ? 'Save Changes' : 'Saving...'}
                        </button>
                     )}
                     {!showUpdate ? null : (
                        <button type='submit' className='properties__menu-save properties__menu-save--active' onClick={(event) => submitUpdate(event)}>
                           {!propertiesContext.updateProperties.isSubmit ? 'Save Changes' : 'Saving...'}
                        </button>
                     )}
                  </div>
               )}
               {propertiesContext.systemProperties.isLoading ? null : properties.items.length === 0 && !showCreate ? (
                  <EmptyProperties />
               ) : showCreate ? (
                  <TableForm
                     submit={submit}
                     input={
                        <Fragment>
                           <div className='table__body --menu'>
                              <IconMenu />
                           </div>
                           <input
                              className='table__body --title'
                              type='text'
                              placeholder='type property name'
                              value={propertiesContext.createProperties.params.name}
                              onChange={({ target: { value } }) =>
                                 propertiesContext.setCreateProperties((prevState) => ({ ...prevState, params: { ...propertiesContext.createProperties.params, name: value } }))
                              }
                           />
                           <div className='table__body --title flexCenter'>
                              <input
                                 type='text'
                                 placeholder='select'
                                 style={{ color: '#fff' }}
                                 value={propertiesContext.createProperties.params.valueType}
                                 onChange={({ target: { value } }) =>
                                    propertiesContext.setCreateProperties((prevState) => ({
                                       ...prevState,
                                       params: { ...propertiesContext.createProperties.params, valueType: value },
                                    }))
                                 }
                              />
                              <span>
                                 <IconArrowDown />
                              </span>
                           </div>
                           <input
                              className='table__body --title'
                              type='text'
                              placeholder='type property value'
                              value={propertiesContext.createProperties.params.value}
                              onChange={({ target: { value } }) =>
                                 propertiesContext.setCreateProperties((prevState) => ({ ...prevState, params: { ...propertiesContext.createProperties.params, value: value } }))
                              }
                           />
                           <div className='table__body --action' style={{ position: 'relative' }}>
                              <IconMore style={{ height: '25px' }} />
                           </div>
                        </Fragment>
                     }
                  />
               ) : showUpdate ? (
                  <TableForm
                     submit={submitUpdate}
                     input={
                        <Fragment>
                           <div className='table__body --menu'>
                              <IconMenu />
                           </div>
                           <input
                              className='table__body --title'
                              type='text'
                              placeholder='type property name'
                              value={propertiesContext.updateProperties.params.name}
                              onChange={({ target: { value } }) =>
                                 propertiesContext.setUpdateProperties((prevState) => ({ ...prevState, params: { ...propertiesContext.updateProperties.params, name: value } }))
                              }
                           />
                           <div className='table__body --title flexCenter'>
                              <input
                                 type='text'
                                 placeholder='select'
                                 style={{ color: '#fff' }}
                                 value={propertiesContext.updateProperties.params.valueType}
                                 onChange={({ target: { value } }) =>
                                    propertiesContext.setUpdateProperties((prevState) => ({
                                       ...prevState,
                                       params: { ...propertiesContext.updateProperties.params, valueType: value },
                                    }))
                                 }
                              />
                              <span>
                                 <IconArrowDown />
                              </span>
                           </div>
                           <input
                              className='table__body --title'
                              type='text'
                              placeholder='type property value'
                              value={propertiesContext.updateProperties.params.value}
                              onChange={({ target: { value } }) =>
                                 propertiesContext.setUpdateProperties((prevState) => ({ ...prevState, params: { ...propertiesContext.updateProperties.params, value: value } }))
                              }
                           />
                           <div className='table__body --action' style={{ position: 'relative' }}>
                              <IconMore style={{ height: '25px' }} />
                           </div>
                        </Fragment>
                     }
                  />
               ) : (
                  <ListProperties updatePropertiesValue={updatePropertiesValue} deleteProperties={deleteProperties} />
               )}
            </Fragment>
         )}
      </section>
   )
}

function ListProperties({ updatePropertiesValue, deleteProperties }) {
   const propertiesContext = useContext(PropertiesContext)
   const properties = propertiesContext.systemProperties

   return (
      <Table
         items={properties.items.map((property) => {
            return (
               <Fragment key={property.propertyId}>
                  <div className='table__body --menu'>
                     <IconMenu />
                  </div>
                  <div className='table__body --title'>{property.name}</div>
                  <div className='table__body --title'>
                     {property.valueType}
                     <span>
                        <IconArrowDown />
                     </span>
                  </div>
                  <div className='table__body --title'>{property.value}</div>
                  <div className='table__body --action' style={{ position: 'relative' }}>
                     <IconMore style={{ height: '25px' }} onClick={() => propertiesContext.setSelectedProperties(property)} />
                     {propertiesContext.selectedProperties?.propertyId !== property.propertyId ? null : (
                        <ModalPropertyAction
                           onClick={() => propertiesContext.setSelectedProperties(null)}
                           title='Property Action'
                           button={
                              <Fragment>
                                 <ButtonAction label='Edit' icon={<EditSVG />} onClick={() => updatePropertiesValue()} />
                                 <ButtonAction label='Delete' icon={<DeleteSVG />} theme='delete' onClick={() => deleteProperties()} />
                              </Fragment>
                           }
                        />
                     )}
                  </div>
               </Fragment>
            )
         })}
      />
   )
}
