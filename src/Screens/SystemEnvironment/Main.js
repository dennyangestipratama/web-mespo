import { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

import MainEmpty from '@Screens/SystemEnvironment/Components/MainEmpty'
import { MOBILE_VIEW } from '@Utilities'

import ArrowLeft from '@Assets/Image/arrow-left.png'
import { ReactComponent as IconWindow } from '@Assets/Icon/window.svg'
import { ReactComponent as IconMenuMobile } from '@Assets/Icon/menu-mobile.svg'
import { ReactComponent as IconMenu } from '@Assets/Icon/menu.svg'
import { ReactComponent as IconArrowLeft } from '@Assets/Icon/arrow-left.svg'
import { ReactComponent as IconAdd } from '@Assets/Icon/add.svg'
import { ReactComponent as IconCopy } from '@Assets/Icon/copy.svg'
import { ReactComponent as IconSearch } from '@Assets/Icon/search.svg'
import { ReactComponent as IconDropdownUp } from '@Assets/Icon/dropdown-up.svg'
import { ReactComponent as IconDropdown } from '@Assets/Icon/dropdown.svg'
import { ReactComponent as IconInfo } from '@Assets/Icon/info.svg'
import { ReactComponent as IconAddWhite } from '@Assets/Icon/add-white.svg'
import { ReactComponent as IconUpload } from '@Assets/Icon/upload.svg'
import { ReactComponent as IconClose } from '@Assets/Icon/close-red.svg'

export default class Main extends Component {
	state = {
		showProperties: true,
	}

	render() {
		const { showProperties } = this.state
		const { isNavigation, systems, setToggle, selectedSystem } = this.props
		const system = systems.filter(filter => filter.ID === selectedSystem)

		return isNavigation ? null : (
			<div className='main'>
				<div className='main__header'>
					<div className='wrapper'>
						<div className='title'>System</div>
						<div className='capsule' onClick={() => setToggle('isClose')}>
							<IconArrowLeft />
							{!selectedSystem ? (
								<div className='title'>Select System</div>
							) : (
									<div className='title active'>{system[0]?.name}</div>
								)}
						</div>
					</div>
					{!selectedSystem || MOBILE_VIEW ? null :
						<div className="main__header__info">
							<div className="desc">
								<div className="title">Description</div>
								<div className="info">{system[0]?.description}</div>
							</div>
							<div className="id">
								<div className="title">System ID</div>
								<div className="info">
									<span>{system[0]?.ID}</span>
									<div>
										<IconCopy />
										<span>Copy</span>
									</div>
								</div>
							</div>
						</div>}
					{MOBILE_VIEW ? <IconMenuMobile onClick={() => setToggle('isNavigation')} /> : <IconWindow />}
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
				<div className='main__body'>
					{!selectedSystem ? null :
						<Fragment>
							<div className="search">
								<input type="text" placeholder='Search Properties' />
								<IconSearch />
							</div>
							<div className="main__body__header">
								<div className="title">
									<span>{`${system[0]?.name} Properties`}</span>
									<IconInfo />
								</div>
								<div className="menu">
									<IconMenu />
									{MOBILE_VIEW ? null : <span>Menu</span>}
								</div>
								<div className="--action">
									{MOBILE_VIEW ? null :
										<Fragment>
											<span>{system[0]?.properties.length}</span>
											<span>Properties</span>
										</Fragment>}
									{showProperties ? <IconDropdownUp /> : <IconDropdown />}
								</div>
							</div>
							<div className="main__body__action">
								<div className="action--button">
									<div>
										<IconAddWhite />
										<span>Add a Property</span>
									</div>
									<div>
										<IconUpload />
										<span>Upload Properties</span>
									</div>
									<div>
										<IconClose />
										<span>Clear All</span>
									</div>
								</div>
								<div className="action--save">Save Changes</div>
							</div>
							<MainEmpty />
						</Fragment>
					}
				</div>
			</div>
		)
	}
}
