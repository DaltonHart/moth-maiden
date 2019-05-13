import React, { Component } from 'react';
import { Card, Grid, Segment } from 'semantic-ui-react';

import Tiles from './Tiles';

import wood from '../assets/wood.jpg';

import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import six from '../assets/six.png';

const PHOTO_SET = [
	{
		id: 1,
		image: two
	},
	{
		id: 2,
		image: three
	},
	{
		id: 3,
		image: four
	},
	{
		id: 4,
		image: five
	},
	{
		id: 5,
		image: six
	},

	{
		id: 6,
		image: one
	}
];

let style = {
	backgroundImage: `url(${wood})`,
	backgroundRepeat: `no-repeat`,
	backgroundSize: `cover`
};

class Services extends Component {
	render() {
		return (
			<div className="over" style={style}>
				<div className="overlayInvert" />
				<div className="overlay" />
				<div className="overlayContent">
					{/* services */}
					<Grid>
						<Grid.Row>
							<Segment
								style={{
									width: '70%',
									margin: '0 auto'
								}}>
								The journey began with microblading, but it didn't stop there...
								With a background in makeup artistry and over eight years of
								experience in the beauty industry, Maddie has always loved
								making clients feel confident in their own skin. She took her
								first microblading training course in May of 2016 and
								microblading/permanent makeup has been a growing passion ever
								since!
							</Segment>
						</Grid.Row>
						<Grid.Row columns={2}>
							<Grid.Column width={12}>
								<Tiles data={PHOTO_SET} />
							</Grid.Column>
							<Grid.Column width={4}>
								<Card.Group itemsPerRow="1">
									<Card>
										<Card.Content header="3D Hairstroke, Blade 'n Shade, & Ombre Brows" />
										<Card.Content description="Brows are the hot new trend! We offer microblading, tattooed brows, or a combo of the two." />
									</Card>
									<Card>
										<Card.Content header="Eyeliner, Lips, & Other Services" />
										<Card.Content description="Not interested in brows? Choose from a range of other beautiful services." />
									</Card>
									<Card>
										<Card.Content header="Another Great Service!" />
										<Card.Content description="Brows are the hot new trend! We offer microblading, tattooed brows, or a combo of the two." />
									</Card>
								</Card.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Services;
