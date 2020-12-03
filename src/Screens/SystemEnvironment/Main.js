import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { MOBILE_VIEW } from '@Utilities'

import ArrowLeft from '@Assets/Image/arrow-left.png'
import { ReactComponent as IconWindow } from '@Assets/Icon/window.svg'
import { ReactComponent as IconMenu } from '@Assets/Icon/menu-mobile.svg'
import { ReactComponent as IconArrowLeft } from '@Assets/Icon/arrow-left.svg'
import { ReactComponent as IconAdd } from '@Assets/Icon/add.svg'

const Main = ({ isClose, setClose, isNavigation, setNavigation }) => {
	return isNavigation ? null : (
		<div className='main'>
			<div className='main__header'>
				<div className='wrapper'>
					<div className='title'>System</div>
					<div className='capsule' onClick={() => setClose(!isClose)}>
						<IconArrowLeft />
						<div className='title'>Select System</div>
					</div>
				</div>
				{MOBILE_VIEW ? <IconMenu onClick={() => setNavigation(true)} /> : <IconWindow />}
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
			</div>
			<div className='main__body'></div>
		</div>
	)
}

export default Main
