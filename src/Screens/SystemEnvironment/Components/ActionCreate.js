import { useState } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import TabEnvironment from '@Screens/SystemEnvironment/Components/TabEnvironment'
import TabSystem from '@Screens/SystemEnvironment/Components/TabSystem'

import { ReactComponent as IconClose } from '@Assets/Icon/close.svg'

const ActionCreate = () => {
	const [modal, setModal] = useState(false)

	const onClickNo = () => {
		setModal(false)
	}

	const onClickYes = () => {
		setModal(false)
	}

	return (
		<div className='createAction'>
			<div className='breadcrumbs'>
				<div className='title'>System List &gt; Create</div>
				<IconClose />
			</div>
			<div className='title'>Create</div>
			<div className='createAction__tab'>
				<NavLink to='/create' className='title' activeClassName='title--active' exact={true}>
					System
				</NavLink>
				<NavLink to='/create/environment' className='title' activeClassName='title--active' exact={true}>
					Environment
				</NavLink>
			</div>
			<Switch>
				<Route
					exact
					path='/create'
					render={() => (
						<TabSystem
							showModal={modal}
							setModal={(param) => setModal(param)}
							onClickNo={onClickNo}
							onclickYes={onClickYes}
						/>
					)}
				/>
				<Route
					path='/create/environment'
					render={() => (
						<TabEnvironment
							showModal={modal}
							setModal={(param) => setModal(param)}
							onClickNo={onClickNo}
							onclickYes={onClickYes}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default ActionCreate
