import { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as IconPhone } from '@Assets/Icon/phone.svg'
import { ReactComponent as IconFeature } from '@Assets/Icon/feature.svg'
import { ReactComponent as IconToggles } from '@Assets/Icon/toggles-off.svg'
import { ReactComponent as IconAccount } from '@Assets/Icon/account.svg'

export default class NavigationMobile extends Component {
	render() {
		return (
			<div className='navigation--mobile'>
				<NavLink
					to='/system'
					className='icon'
					activeClassName='icon--active'
					exact={true}
					isActive={(match, location) => {
						if (location.pathname.includes('create')) return true
						if (location.pathname.includes('system')) return true
					}}>
					<IconPhone />
				</NavLink>
				<NavLink to='/features' className='icon' activeClassName='icon--active'>
					<IconFeature />
				</NavLink>
				<NavLink to='/toggles' className='icon' activeClassName='icon--active'>
					<IconToggles />
				</NavLink>
				<NavLink to='/account' className='icon' activeClassName='icon--active'>
					<IconAccount />
				</NavLink>
			</div>
		)
	}
}
