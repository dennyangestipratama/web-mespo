import Button from '@Components/Button'
import Modal from '@Components/Modal'

import { ReactComponent as IconInfo } from '@Assets/Icon/info.svg'
import { ReactComponent as IconAttachment } from '@Assets/Icon/attachment.svg'

const TabSystem = ({ setModal, modal, onClickNo, onClickYes }) => {
	return (
		<div className='tabSystem'>
			<div className='empty'>
				<IconInfo />
				<div className='title'>You don’t have any System. Create your first one below.</div>
			</div>
			<form>
				<label htmlFor='system-name'>System Name</label>
				<input type='text' id='system-name' placeholder='System Name' />
				<label htmlFor='system-description'>System Description</label>
				<textarea id='system-description' cols='30' rows='10' placeholder='Optional' />
				<label htmlFor='url'>URL</label>
				<input type='text' id='url' placeholder='https://' />
				<label htmlFor='system-ID'>System ID</label>
				<input type='text' id='system-ID' placeholder='System ID' />
				<div className='attachment'>
					<div className='attachment__icon'>
						<IconAttachment />
					</div>
					<div className='title'>Attach to Environment</div>
					<div className='info'>No Environment available</div>
				</div>
				<button onClick={() => setModal(true)}>test</button>
				{/* <Button type='submit' text='Create' style={{ marginRight: '31px' }} onClick={() => setModal} /> */}
			</form>
			{!modal ? null : (
				<div>test</div>
				// <Modal
				// 	type={1}
				// 	text={`Environment SS_Prod is  successfully created !`}
				// 	info={`But it seems it doesn’t attach to any system. Do you want to create a system now?`}
				// 	onClickNo={() => onClickNo()}
				// 	onClickYes={() => onClickYes()}
				// />
			)}
		</div>
	)
}

export default TabSystem
