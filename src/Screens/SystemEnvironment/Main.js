import { Link } from 'react-router-dom'

import ArrowLeft from '@Assets/Image/arrow-left.png'
import { ReactComponent as IconWindow } from '@Assets/Icon/window.svg'
import { ReactComponent as IconArrowLeft } from '@Assets/Icon/arrow-left.svg'
import { ReactComponent as IconAdd } from '@Assets/Icon/add.svg'

const Main = ({ isClose, setClose }) => {
	return (
		<div className='main'>
			<div className='main__header'>
				<div className='wrapper'>
					<div className='title'>System</div>
					<div className='capsule' onClick={() => setClose(!isClose)}>
						<IconArrowLeft />
						<div className='title'>Select System</div>
					</div>
				</div>
				<IconWindow />
			</div>
			<div className='main__filter'>
				<div className='title'>Environment</div>
				<Link to='/create'>
					<IconAdd />
				</Link>
				<img src={ArrowLeft} alt='arrow' />
				<div className='info'>or create environment first here.</div>
			</div>
			<div className='main__body'></div>
		</div>
	)
}

export default Main
