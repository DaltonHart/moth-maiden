import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link, animateScroll as scroll } from 'react-scroll';

import vid from '../assets/mothVid.mp4';
import moth from '../assets/moth.png';
import wood from '../assets/wood.jpg';
import about from '../assets/about.png';
import services from '../assets/services.png';

import three from '../assets/three.png';
import four from '../assets/four.png';

import one from '../assets/parrOne.png';
import two from '../assets/parrTwo.png';

import training from '../assets/training.png';

let parallax = {
	height: '80vh',
	backgroundImage: `url(${about})`,
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};
let parallax2 = {
	backgroundImage: `url(${services})`,
	height: '70vh',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};
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
let parallax4 = {
	backgroundImage: `url(${one})`,
	height: '70vh',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="fullscreen-video-wrap" />
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
					<div style={{ backgroundColor: 'black', height: '5vh' }} />
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
					<div style={{ backgroundColor: 'black', height: '5vh' }} />
					<div id="about" style={parallax}>
						<Grid>
							<Grid.Row>
								<Grid.Column width={8}>
									<div style={{ padding: '2em', background: 'white' }}>
										<p>
											The journey began with microblading, but it didn't stop
											there...
										</p>
										<p>
											With a background in makeup artistry and over eight years
											of experience in the beauty industry, Maddie has always
											loved making clients feel confident in their own skin. She
											took her first microblading training course in May of 2016
											and microblading/permanent makeup has been a growing
											passion ever since!
										</p>
										<p>
											Maddie has taken additional advanced courses from
											permanent makeup professionals like Jennifer Boyd, Fuzion
											Brows, & Will Anthony. She plans to continue her education
											and further expand her services menu. With her interest in
											continuing education, she believes in bringing only the
											absolute best to her clients and students. This attention
											to detail includes using the highest-quality products for
											all her services.
										</p>
										<p>
											When you put your permanent makeup needs in the hands of
											Microblading by Maddie, you won't be disappointed. Work
											with an ethical, extensively trained technician who cares
											about your face, and call Maddie today. Thank you for
											visiting!
										</p>
									</div>
								</Grid.Column>
								<Grid.Column width={8} />
							</Grid.Row>
						</Grid>
					</div>
					<div style={{ backgroundColor: 'black', height: '5vh' }} />
					<div style={parallax2}>
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
								Services
							</p>
						</div>
					</div>
					<div style={{ backgroundColor: 'black', height: '5vh' }} />
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
					<div style={{ backgroundColor: 'black', height: '5vh' }} />
					<div style={parallax4}>
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
								Team
							</p>
						</div>
					</div>
					<div
						style={{
							backgroundColor: 'black',
							height: '20vh',
							color: 'white'
						}}>
						<Grid>
							<Grid.Row columns={3}>
								<Grid.Column>Contact</Grid.Column>
								<Grid.Column>Social media</Grid.Column>
								<Grid.Column>Address</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
