import { Fragment, useState } from 'react'

import Modal from '@Components/Modal'
import Action from '@Screens/SystemEnvironment/Action'
import Main from '@Screens/SystemEnvironment/Main'
import { Navigation } from '@Layouts'
import { MOBILE_VIEW } from '@Utilities'

const SystemEnvironment = () => {
	const [close, setClose] = useState(false)
	const [navigation, setNavigation] = useState(false)
	const [modalSystem, setModalSystem] = useState(false)
	const [modalEnvironment, setModalEnvironment] = useState(false)

	const onClickNo = () => {
		setModalSystem(false)
		setModalEnvironment(false)
	}

	const onClickYes = () => {
		setModalSystem(false)
		setModalEnvironment(false)
	}

	return (
		<Fragment>
			<Action
				isClose={close}
				isNavigation={navigation}
				setClose={(param) => setClose(param)}
				setModalSystem={(param) => setModalSystem(param)}
				setModalEnvironment={(param) => setModalEnvironment(param)}
			/>
			{MOBILE_VIEW && !close ? null : (
				<Main
					isClose={close}
					isNavigation={navigation}
					setNavigation={(param) => setNavigation(param)}
					setClose={(param) => setClose(param)}
				/>
			)}
			{MOBILE_VIEW && navigation ? <Navigation setNavigation={(param) => setNavigation(param)} /> : null}
			{!modalSystem ? null : (
				<Modal
					type={1}
					text={`SS_Prod`}
					info={`But it seems it doesn’t attach to any environment. Do you want to create a environment now?`}
					onClickNo={onClickNo}
					onClickYes={onClickYes}
				/>
			)}
			{!modalEnvironment ? null : (
				<Modal
					type={2}
					text={`SS_Prod`}
					info={`But it seems it doesn’t attach to any system. Do you want to create a system now?`}
					onClickNo={onClickNo}
					onClickYes={onClickYes}
				/>
			)}
		</Fragment>
	)
}

export default SystemEnvironment
