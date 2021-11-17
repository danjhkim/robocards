import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
	const cardComponent = robots.map(item => {
		// if (true) {
		// 	throw new Error('NOOO');
		// }
		return (
			<Card
				key={item.id}
				id={item.id}
				name={item.name}
				email={item.email}
			/>
		);
	});

	return <div>{cardComponent}</div>;
};

export default CardList;
