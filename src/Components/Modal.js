import { MODAL_SUCCESS_CREATE_SYSTEM, MODAL_SUCCESS_CREATE_ENVIRONMENT } from '@Utilities'

import { ReactComponent as IconSystem } from '@Assets/Icon/system.svg'
import { ReactComponent as IconEnvironment } from '@Assets/Icon/environment.svg'

const Modal = ({ type, text, info, onClickNo, onClickYes }) => {
	return (
		<div className='modal'>
			{type === MODAL_SUCCESS_CREATE_SYSTEM ? (
				<IconSystem />
			) : MODAL_SUCCESS_CREATE_ENVIRONMENT ? (
				<IconEnvironment />
			) : null}
			<div className='title'>{text}</div>
			<div className='info'>{info}</div>
			<div className='button'>
				<button onClick={() => onClickNo()}>No</button>
				<button onClick={() => onClickYes()}>Yes</button>
			</div>
		</div>
	)
}

export default Modal
