import React, { Component } from 'react';

import vid from '../assets/mothVid.mp4';
import moth from '../assets/moth.png';

class Landing extends Component {
	render() {
		return (
			<div className="overLanding">
				<div className="fullscreen-video-wrap">
					<video src={vid} autoPlay={true} loop={true} muted={true} />
				</div>
				<div className="overlay" />
				<div className="overlayContent">
					<h1 className="compTitle">Moth Maiden | Tattoo & PMU</h1>
					<img
						style={{
							width: '50%',
							margin: '0 auto',
							filter: 'invert(100%) drop-shadow(5px 5px 5px #000) '
						}}
						src={moth}
						alt="company logo"
					/>
				</div>
			</div>
		);
	}
}

export default Landing;
