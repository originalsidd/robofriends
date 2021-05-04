import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardsArray = robots.map(user => {
		return(
			<Card 
				key={user.id} 
				id={user.id} 
				name={user.name} 
				email={user.email} 
			/>
		);
	});
	return (
		<div>
			{
				cardsArray
				// whole js above can be written here
			}
		</div>
	);
}

export default CardList;