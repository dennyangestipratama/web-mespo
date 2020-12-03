import { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { MOBILE_VIEW } from '@Utilities'

import Mespo_Logo from '@Assets/Image/logo.png'
import { ReactComponent as IconDropdown } from '@Assets/Icon/dropdown.svg'
import { ReactComponent as IconDropdownUp } from '@Assets/Icon/dropdown-up.svg'
import { ReactComponent as IconPhone } from '@Assets/Icon/phone.svg'
import { ReactComponent as IconFeature } from '@Assets/Icon/feature.svg'
import { ReactComponent as IconToggles } from '@Assets/Icon/toggles-off.svg'
import { ReactComponent as IconPeople } from '@Assets/Icon/people.svg'
import { ReactComponent as IconAccount } from '@Assets/Icon/account.svg'
import { ReactComponent as IconHat } from '@Assets/Icon/hat.svg'
import { ReactComponent as IconClose } from '@Assets/Icon/close.svg'

export default class Navigation extends Component {
	state = {
		showProperties: true,
		showFeatures: true,
		showAccount: true,
	}

	render() {
		const { showAccount, showFeatures, showProperties } = this.state
		const { setToggle } = this.props
		return (
			<div className='navigation'>
				<div className='navigation--logo'>
					<img src={Mespo_Logo} alt='mespo-logo' />
					{MOBILE_VIEW ? <IconClose onClick={() => setToggle('isNavigation')} /> : null}
				</div>
				<div className='navigation__wrapper'>
					<div className='navigation__header' onClick={() => this.setState({ showProperties: !showProperties })}>
						<div className='title'>Dynamic Properties</div>
						{showProperties ? <IconDropdownUp /> : <IconDropdown />}
					</div>
					{!showProperties ? null : (
						<NavLink
							to='/'
							className='navigation__content'
							activeClassName='navigation__content--active'
							exact={true}
							isActive={(match, location) => {
								if (location.pathname.includes('create')) return true
								if (location.pathname.includes('/')) return true
							}}>
							<IconPhone />
							<div className='title'>System Environment</div>
						</NavLink>
					)}
				</div>
				<div className='navigation__wrapper'>
					<div className='navigation__header' onClick={() => this.setState({ showFeatures: !showFeatures })}>
						<div className='title'>Features & Toggles</div>
						{showFeatures ? <IconDropdownUp /> : <IconDropdown />}
					</div>
					{!showFeatures ? null : (
						<Fragment>
							<NavLink
								to='/features'
								className='navigation__content'
								activeClassName='navigation__content--active'
								exact={true}>
								<IconFeature />
								<div className='title'>Features</div>
							</NavLink>
							<NavLink
								to='/toggles'
								className='navigation__content'
								activeClassName='navigation__content--active'
								exact={true}>
								<IconToggles />
								<div className='title'>Toggles</div>
							</NavLink>
						</Fragment>
					)}
				</div>
				<div className='navigation__wrapper'>
					<div className='navigation__header' onClick={() => this.setState({ showAccount: !showAccount })}>
						<div className='title'>Accounts</div>
						{showAccount ? <IconDropdownUp /> : <IconDropdown />}
					</div>
					{!showAccount ? null : (
						<Fragment>
							<NavLink
								to='/account'
								className='navigation__content'
								activeClassName='navigation__content--active'
								exact={true}>
								<IconAccount />
								<div className='title'>Me</div>
							</NavLink>
							<NavLink
								to='/people'
								className='navigation__content'
								activeClassName='navigation__content--active'
								exact={true}>
								<IconPeople />
								<div className='title'>People</div>
							</NavLink>
							<NavLink
								to='/roles'
								className='navigation__content'
								activeClassName='navigation__content--active'
								exact={true}>
								<IconHat />
								<div className='title'>Roles</div>
							</NavLink>
						</Fragment>
					)}
				</div>
			</div>
		)
	}
}
