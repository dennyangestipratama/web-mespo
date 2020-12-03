import { Fragment, Component } from 'react'

import Modal from '@Components/Modal'
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
		systems: [
			{
				ID: 1,
				name: 'Shapestone',
				isCheck: false,
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

	render() {
		const { isClose, isModalEnvironment, isModalSystem, isNavigation, systems, environments } = this.state
		return (
			<Fragment>
				<Action
					systems={systems}
					environments={environments}
					isClose={isClose}
					isNavigation={isNavigation}
					setToggle={this.setToggle}
				/>
				{MOBILE_VIEW && !isClose ? null : (
					<Main
						systems={systems}
						environments={environments}
						isNavigation={isNavigation}
						setToggle={this.setToggle}
					/>
				)}
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
			</Fragment>
		)
	}
}
