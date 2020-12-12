import { Fragment, Component } from 'react'

import Modal from '@Components/Modal'
import ModalUpload from '@Components/ModalUpload'
import ModalDelete from '@Components/ModalDelete'

import Action from '@Screens/SystemEnvironment/Action'
import Main from '@Screens/SystemEnvironment/Main'
import { Navigation } from '@Layouts'
import { MOBILE_VIEW } from '@Utilities'

export default class SystemEnvironment extends Component {
   state = {
      isClose: false,
      isNavigation: false,
      isModalSystem: false,
      isModalEnvironment: false,
      isModalUpload: false,
      isModalDelete: false,
      showOptionSystem: false,
      showOptionProperty: false,
      type: null,
      selectedSystem: this.props.match.params.ID ? parseInt(this.props.match.params.ID) : null,
      systems: [
         {
            ID: 1,
            name: 'Shapestone',
            isCheck: false,
            description: 'An Awesome asset platform !',
            properties: [],
         },
         {
            ID: 2,
            name: 'Troumaka',
            isCheck: false,
            description: 'An Awesome asset platform !',
            properties: [],
         },
      ],
      environments: null,
   }

   setToggle = (state) => {
      this.setState((prevState) => ({ [state]: !prevState[state] }))
   }

   setType = (params) => {
      this.setState({ type: params })
   }

   setFalse = (state) => {
      this.setState({ [state]: false })
   }

   selectSystem = (ID) => {
      this.setState({ selectedSystem: ID })
   }

   showOption = (ID) => {
      this.setState({ showOptionSystem: ID })
   }

   showProperty = (ID) => {
      this.setState({ showOptionProperty: ID })
   }

   render() {
      const {
         isClose,
         isModalEnvironment,
         isModalUpload,
         isModalDelete,
         isModalSystem,
         isNavigation,
         systems,
         environments,
         selectedSystem,
         showOptionSystem,
         showOptionProperty,
      } = this.state
      return (
         <Fragment>
            <Action
               {...this.props}
               systems={systems}
               environments={environments}
               isClose={isClose}
               isNavigation={isNavigation}
               selectedSystem={selectedSystem}
               showOptionSystem={showOptionSystem}
               setToggle={this.setToggle}
               setType={this.setType}
               showOption={this.showOption}
               selectSystem={this.selectSystem}
            />
            {MOBILE_VIEW && !isClose ? null :
               <Main
                  {...this.props}
                  systems={systems}
                  selectedSystem={selectedSystem}
                  isNavigation={isNavigation}
                  showOptionProperty={showOptionProperty}
                  setToggle={this.setToggle}
                  setType={this.setType}
                  showProperty={this.showProperty}
               />}
            {MOBILE_VIEW && isNavigation ? <Navigation setToggle={this.setToggle} /> : null}
            {!isModalSystem ? null : (
               <Modal
                  {...this.props}
                  type={1}
                  text={`SS_Prod`}
                  info={`But it seems it doesn’t attach to any environment. Do you want to create a environment now?`}
                  isNo={this.setFalse}
                  isYes={this.setFalse}
               />
            )}
            {!isModalEnvironment ? null : (
               <Modal
                  {...this.props}
                  type={2}
                  text={`SS_Prod`}
                  info={`But it seems it doesn’t attach to any system. Do you want to create a system now?`}
                  isNo={this.setFalse}
                  isYes={this.setFalse}
               />
            )}
            {!isModalUpload ? null : (
               <ModalUpload setToggle={this.setToggle} />
            )}

            {!isModalDelete ? null : (
               <ModalDelete type={this.state.type} title='shapestone' setToggle={this.setToggle} />
            )}
         </Fragment>
      )
   }
}
