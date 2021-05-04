import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '3px solid black', height: '565px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;