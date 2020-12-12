import { Fragment, Component } from 'react'

import Modal from '@Components/Modal'
import ModalUpload from '@Components/ModalUpload'

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
      showOptionSystem: false,
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

   setFalse = (state) => {
      this.setState({ [state]: false })
   }

   selectSystem = (ID) => {
      this.setState({ selectedSystem: ID })
   }

   closeOption = () => {
      this.setState({ showOptionSystem: false })
   }

   showOption = (ID) => {
      this.setState({ showOptionSystem: ID })
   }

   render() {
      const { isClose, isModalEnvironment, isModalUpload, isModalSystem, isNavigation, systems, environments, selectedSystem, showOptionSystem } = this.state
      console.log(this.state.showOptionSystem)
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
               showOption={this.showOption}
               selectSystem={this.selectSystem}
            />
            {MOBILE_VIEW && !isClose ? null : <Main {...this.props} systems={systems} selectedSystem={selectedSystem} isNavigation={isNavigation} setToggle={this.setToggle} />}
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
         </Fragment>
      )
   }
}
