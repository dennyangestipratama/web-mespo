import { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

import { MOBILE_VIEW } from '@Utilities'

import ArrowLeft from '@Assets/Image/arrow-left.png'
import { ReactComponent as IconWindow } from '@Assets/Icon/window.svg'
import { ReactComponent as IconMenu } from '@Assets/Icon/menu-mobile.svg'
import { ReactComponent as IconArrowLeft } from '@Assets/Icon/arrow-left.svg'
import { ReactComponent as IconAdd } from '@Assets/Icon/add.svg'

export default class Main extends Component {
	render() {
		const { isNavigation, environments, systems, setToggle } = this.props
		return isNavigation ? null : (
			<div className='main'>
				<div className='main__header'>
					<div className='wrapper'>
						<div className='title'>System</div>
						<div className='capsule' onClick={() => setToggle('isClose')}>
							<IconArrowLeft />
							{systems.length === 0 ? (
								<div className='title'>Select System</div>
							) : (
								<div className='title active'>Shapestone</div>
							)}
						</div>
					</div>
					{MOBILE_VIEW ? <IconMenu onClick={() => setToggle('isNavigation')} /> : <IconWindow />}
				</div>
				<div className='main__filter'>
					<div className='title'>Environment</div>
					<Link to='/create'>
						<IconAdd />
					</Link>
					{MOBILE_VIEW ? null : (
						<Fragment>
							<img src={ArrowLeft} alt='arrow' />
							<div className='info'>or create environment first here.</div>
						</Fragment>
					)}
					{environments ? null : null}
				</div>
				<div className='main__body'></div>
			</div>
		)
	}
}
