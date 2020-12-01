import { Fragment, useState } from 'react'

import Action from '@Screens/SystemEnvironment/Action'
import Main from '@Screens/SystemEnvironment/Main'

const SystemEnvironment = () => {
	const [close, setClose] = useState(false)

	return (
		<Fragment>
			<Action isClose={close} setClose={(param) => setClose(param)} />
			<Main isClose={close} setClose={(param) => setClose(param)} />
		</Fragment>
	)
}

export default SystemEnvironment
