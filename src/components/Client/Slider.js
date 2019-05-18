import React from 'react';
import three from '../assets/three.png';
import four from '../assets/four.png';
import one from '../assets/parrOne.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
	return (
		<Carousel autoPlay infiniteLoop showThumbs={false}>
			<div>
				<img src={three} alt="wood" />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src={four} alt="wood" />
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<img src={one} alt="wood" />
				<p className="legend">Legend 3</p>
			</div>
		</Carousel>
	);
};

export default Slider;
