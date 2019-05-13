import React, { Component } from 'react';

import Tile from './Tile';

const Tiles = props => {
	const displayTiles = images => {
		return images.map(image => {
			return <Tile data={image} key={image.id} />;
		});
	};
	return <div className="tiles">{displayTiles(props.data)}</div>;
};

export default Tiles;
