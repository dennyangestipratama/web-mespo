import GhostImage from '@Assets/Image/ghost.png'
import AddSystemImage from '@Assets/Image/add-system.png'
import { ReactComponent as IconClose } from '@Assets/Icon/close.svg'
import { ReactComponent as IconSearch } from '@Assets/Icon/search.svg'
import { ReactComponent as IconAdd } from '@Assets/Icon/add.svg'

const Action = ({ isClose, setClose }) => {
	return isClose ? null : (
		<div className='action'>
			<IconClose onClick={() => setClose(!isClose)} />
			<div className='action__search'>
				<div className='wrapper'>
					<input type='text' placeholder='Search System' />
					<IconSearch />
				</div>
				<IconAdd />
			</div>
			<div className='action__body'>
				<img className='add-system' src={AddSystemImage} alt='add-system' />
				<div className='title'>Add your system to shoo away the boo-boo!</div>
				<img src={GhostImage} alt='ghost' />
			</div>
		</div>
	)
}

export default Action
