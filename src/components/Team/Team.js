import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import Footer from '../Footer';

import maddie from '../assets/maddie.png';
import ashley from '../assets/ashley.png';
import bree from '../assets/bree.png';
import chantel from '../assets/chantel.png';
import kyela from '../assets/kyela.png';

const members = [
	{
		name: 'Maddie',
		bio: `Maddie is the owner of Moth Maiden and provides a wide array of services. She also offers one-on-one as well as group training for microblading and PMU.`,
		img: maddie
	},
	{
		name: 'Ashley',
		bio: `Ashley is a Moth Maiden trained and certified artist since October of 2018. She offers 3D hairstroke microblading as well as manual brow shading for a fuller look. You can find her online portfolio on Instagram under the username @smash_brows`,
		img: ashley
	},
	{
		name: 'Bree',
		bio: `Bree is a Moth Maiden trained and certified artist with a background in makeup art. She offers 3D hairstroke microblading as well as manual brow shading and lash enhancement eyeliner. You can find her online portfolio on Instagram under the username @breedagoddess`,
		img: bree
	},
	{ name: 'Chantel', img: chantel },
	{
		name: 'Kay',
		bio: `Kay (Kyela) is a Moth Maiden trained and certified artist since October of 2018. With a background in nursing prior to her interest in the beauty industry, she offers 3D hairstroke microblading as well as manual brow shading for a fuller look. You can find her online portfolio on Instagram under the username @eyebrowsbykay`,
		img: kyela
	}
];

const displayTeam = members =>
	members.map(member => (
		<Card>
			<Image src={member.img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{member.name}</Card.Header>
				<Card.Description>{member.bio}</Card.Description>
			</Card.Content>
		</Card>
	));

const Team = () => {
	return (
		<>
			<div style={{ margin: '7vh 2vw' }}>
				<Card.Group centered>{displayTeam(members)}</Card.Group>
			</div>
			<Footer />
		</>
	);
};

export default Team;
