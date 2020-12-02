import { useHistory } from 'react-router-dom'

import { MODAL_SUCCESS_CREATE_SYSTEM, MODAL_SUCCESS_CREATE_ENVIRONMENT } from '@Utilities'

import { ReactComponent as IconSystem } from '@Assets/Icon/system.svg'
import { ReactComponent as IconEnvironment } from '@Assets/Icon/environment.svg'

const Modal = ({ type, text, info, onClickNo, onClickYes }) => {
	let history = useHistory()

	const redirect = () => {
		if (type === MODAL_SUCCESS_CREATE_SYSTEM) {
			history.push('/create/environment')
		} else if (type === MODAL_SUCCESS_CREATE_ENVIRONMENT) {
			history.push('/create')
		} else {
			return null
		}
	}

	return (
		<div className='modal'>
			{type === MODAL_SUCCESS_CREATE_SYSTEM ? (
				<IconSystem />
			) : MODAL_SUCCESS_CREATE_ENVIRONMENT ? (
				<IconEnvironment />
			) : null}
			<div className='title'>
				<span>
					{type === MODAL_SUCCESS_CREATE_SYSTEM
						? 'System '
						: MODAL_SUCCESS_CREATE_ENVIRONMENT
						? 'Environment '
						: null}
				</span>
				<span style={{ color: '#3776FF' }}>{text} </span>
				<span>is successfully created !</span>
			</div>
			<div className='info'>{info}</div>
			<div className='buttonModal'>
				<button className='no' onClick={() => onClickNo()}>
					No
				</button>
				<button
					onClick={() => {
						onClickYes()
						redirect()
					}}>
					Yes
				</button>
			</div>
		</div>
	)
}

export default Modal
