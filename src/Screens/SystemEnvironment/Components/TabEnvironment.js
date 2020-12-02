import Button from '@Components/Button'

import { ReactComponent as IconInfo } from '@Assets/Icon/info.svg'
import { ReactComponent as IconAttachment } from '@Assets/Icon/attachment.svg'

const TabEnvironment = ({ setModalEnvironment }) => {
	return (
		<div className='tabSystem'>
			<div className='empty'>
				<IconInfo />
				<div className='title'>You don’t have any Environment. Create your first one below.</div>
			</div>
			<form>
				<label htmlFor='environment-name'>Environment Name</label>
				<input type='text' id='environment-name' placeholder='Environment Name' />
				<label htmlFor='environment-description'>Environment Description</label>
				<textarea id='environment-description' cols='30' rows='10' placeholder='Optional' />
				<label htmlFor='url'>URL</label>
				<input type='text' id='url' placeholder='https://' />
				<label htmlFor='environment-ID'>Environment ID</label>
				<input type='text' id='environment-ID' placeholder='Environment ID' />
				<div className='attachment'>
					<div className='attachment__icon'>
						<IconAttachment />
					</div>
					<div className='title'>Attach to System</div>
					<div className='info'>No System available</div>
				</div>
			</form>
			<Button text='Create' style={{ marginRight: '31px' }} onClick={() => setModalEnvironment(true)} />
		</div>
	)
}

export default TabEnvironment
