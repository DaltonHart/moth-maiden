import React, { Component } from 'react';
import {
	Header,
	Card,
	Image,
	Button,
	Divider,
	Segment
} from 'semantic-ui-react';

import fern from '../assets/fern.jpg';

import maddie from '../assets/maddie.png';
import chantel from '../assets/Chantel.png';
import breanna from '../assets/Breanna.png';
import kyela from '../assets/Kyela.png';
import amanda from '../assets/Amanda.png';
import mandy from '../assets/Mandy.png';

const members = [
	{
		img: maddie,
		name: 'Maddie',
		bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
	qui? Qui ad molestias voluptas est facilis dicta sapiente vitae,
	alias, iure perspiciatis, libero vel eligendi quia non reiciendis
	quae porro.`
	},
	{
		img: chantel,
		name: 'Chantel',
		bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
	qui? Qui ad molestias voluptas est facilis dicta sapiente vitae,
	alias, iure perspiciatis, libero vel eligendi quia non reiciendis
	quae porro.`
	},
	{
		img: breanna,
		name: 'Breanna',
		bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
	qui? Qui ad molestias voluptas est facilis dicta sapiente vitae,
	alias, iure perspiciatis, libero vel eligendi quia non reiciendis
	quae porro.`
	},
	{
		img: kyela,
		name: 'Kyela',
		bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
	qui? Qui ad molestias voluptas est facilis dicta sapiente vitae,
	alias, iure perspiciatis, libero vel eligendi quia non reiciendis
	quae porro.`
	},
	{
		img: amanda,
		name: 'Amanda',
		bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
	qui? Qui ad molestias voluptas est facilis dicta sapiente vitae,
	alias, iure perspiciatis, libero vel eligendi quia non reiciendis
	quae porro.`
	},
	{
		img: mandy,
		name: 'Mandy',
		bio: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
	qui? Qui ad molestias voluptas est facilis dicta sapiente vitae,
	alias, iure perspiciatis, libero vel eligendi quia non reiciendis
	quae porro.`
	}
];

class Team extends Component {
	displayCards = team => {
		return team.map(member => {
			return (
				<Card>
					<Image src={member.img} wrapped ui={false} />
					<Card.Content>
						<Card.Header>{member.name}</Card.Header>
						<Card.Description>{member.bio}</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<Button circular color="facebook" icon="facebook" />
						<Button circular color="twitter" icon="twitter" />
						<Button circular color="instagram" icon="instagram" />
					</Card.Content>
				</Card>
			);
		});
	};

	render() {
		let style = {
			backgroundImage: `url(${fern})`,
			backgroundRepeat: `no-repeat`,
			backgroundSize: `cover`
		};
		return (
			<div className=" team" style={style}>
				<div className="overlayInvert" />
				<div className="content">
					<Segment>
						<Header
							style={{
								display: 'inline',
								padding: '.5em',
								margin: '.3em'
							}}
							as="h1"
							size="huge">
							THE GIRLS OF MOTH MAIDEN
						</Header>
					</Segment>
					<Divider />
					<Card.Group centered>{this.displayCards(members)}</Card.Group>
				</div>
			</div>
		);
	}
}

export default Team;
