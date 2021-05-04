import React from 'react';
// in react 17 JSX syntax automatically import the necessary react/jsx-runtime functions
// React will no longer need to be in scope when you use JSX.

const Card = ({ name, email, id }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=260x260`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	
	);
}

export default Card;
