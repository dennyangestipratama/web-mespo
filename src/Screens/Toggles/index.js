import { Fragment, Component } from 'react'

import ModalUpload from '@Components/ModalUpload'
import ModalDelete from '@Components/ModalDelete'

import Main from '@Screens/Toggles/Main'
import { Navigation } from '@Layouts'
import { MOBILE_VIEW } from '@Utilities'

export default class SystemEnvironment extends Component {
   state = {
      isClose: false,
      isNavigation: false,
      selectedToggle: this.props.match.params.ID ? parseInt(this.props.match.params.ID) : null,
      toggles: [
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
      this.setState({ selectedToggle: ID })
   }

   render() {
      const {
         isClose,
         isModalUpload,
         isModalDelete,
         isNavigation,
         toggles,
         selectedToggle,
      } = this.state
      return (
         <Fragment>
            {MOBILE_VIEW && !isClose ? null :
               <Main
                  {...this.props}
                  toggles={toggles}
                  selectedToggle={selectedToggle}
                  isNavigation={isNavigation}
                  setToggle={this.setToggle}
               />}
            {MOBILE_VIEW && isNavigation ? <Navigation setToggle={this.setToggle} /> : null}
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
