import React, { Component } from 'react';

import moth from '../assets/moth.png';
import About from './About';
import Services from './Services';
import Slider from './Slider';
import Team from './Team';
import Training from './Training';
import Divider from './Divider';

class Landing extends Component {
	render() {
		return (
			<>
				<div>
					<div className="overlayContent" style={{ backgroundColor: 'black' }}>
						<img
							style={{
								width: '50%',
								margin: '7vh auto',
								filter: 'invert(100%) drop-shadow(5px 5px 5px #000) '
							}}
							src={moth}
							alt="company logo"
						/>
						<Divider />
						<Slider />
						<Divider />
						{/* About */}
						<About />
						<Divider />
						{/* Services */}
						<Services />
						<Divider />
						{/* Training */}
						<Training />
						<Divider />
						{/* Team */}
						<Team />
					</div>
				</div>
			</>
		);
	}
}

export default Landing;
