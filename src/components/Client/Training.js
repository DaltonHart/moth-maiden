import React from 'react';

import training from '../assets/training.png';
let parallax3 = {
	backgroundImage: `url(${training})`,
	height: '70vh',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const Training = () => {
	return (
		<div style={parallax3}>
			<div
				className="title"
				style={{
					border: '1em solid white',
					color: 'white',
					padding: '2em',
					width: '70%',
					height: '70%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<p style={{ fontSize: '7em', textShadow: '5px 5px 5px #000000' }}>
					Training
				</p>
			</div>
		</div>
	);
};

export default Training;
