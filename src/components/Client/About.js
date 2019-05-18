import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import about from '../assets/about.png';
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

class About extends Component {
	render() {
		return (
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
									With a background in makeup artistry and over eight years of
									experience in the beauty industry, Maddie has always loved
									making clients feel confident in their own skin. She took her
									first microblading training course in May of 2016 and
									microblading/permanent makeup has been a growing passion ever
									since!
								</p>
								<p>
									Maddie has taken additional advanced courses from permanent
									makeup professionals like Jennifer Boyd, Fuzion Brows, & Will
									Anthony. She plans to continue her education and further
									expand her services menu. With her interest in continuing
									education, she believes in bringing only the absolute best to
									her clients and students. This attention to detail includes
									using the highest-quality products for all her services.
								</p>
								<p>
									When you put your permanent makeup needs in the hands of
									Microblading by Maddie, you won't be disappointed. Work with
									an ethical, extensively trained technician who cares about
									your face, and call Maddie today. Thank you for visiting!
								</p>
							</div>
						</Grid.Column>
						<Grid.Column width={8} />
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default About;
