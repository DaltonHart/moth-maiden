import React from 'react';
import { Grid } from 'semantic-ui-react';
const Footer = () => {
	return (
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
	);
};

export default Footer;
