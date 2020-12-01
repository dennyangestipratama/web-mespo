const Button = ({ text, onClick, type, style }) => {
	return (
		<div className='button' style={style}>
			<button type={type} onClick={onClick}>
				{text}
			</button>
		</div>
	)
}

export default Button
