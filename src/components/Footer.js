import React from 'react';
import { Grid, List, Button, Icon, GridRow } from 'semantic-ui-react';

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: '#b87333',
				height: '15vh',
				color: 'white',
				width: '100%',
				position: 'relative'
			}}>
			<Grid
				style={{
					backgroundColor: '#b87333',
					height: '12vh',
					color: 'white'
				}}>
				<Grid.Row columns={3}>
					<Grid.Column>
						<List
							divided
							style={{ width: '50%', height: '50%', marginLeft: '1em' }}>
							<List.Item icon="phone" content="(559) 476-9824" />
							<List.Item
								icon="marker"
								content={
									<a
										style={{ color: 'white' }}
										href="https://www.google.com/maps/place/1560+Fulton+St+%23103,+Fresno,+CA+93721/@36.7398107,-119.7985533,17z/data=!3m1!4b1!4m5!3m4!1s0x809460a46d9d22e7:0xf3e98e4f593686a3!8m2!3d36.7398107!4d-119.7963646">
										1560 Fulton Street, #103 Fresno, CA 93721
									</a>
								}
							/>
							<List.Item
								icon="mail"
								content={
									<a
										style={{ color: 'white' }}
										href="mailto:mothmaidentraining@gmail.com">
										mothmaidentraining@gmail.com
									</a>
								}
							/>
						</List>
					</Grid.Column>
					<Grid.Column>
						<Grid.Row>Join us on Social media!</Grid.Row>
						<Grid.Row>
							<a href="https://www.facebook.com/microbladingbymaddie">
								<Button color="facebook" icon="facebook" />
							</a>
							<a href="https://www.instagram.com/fresnomicroblading/">
								<Button color="instagram" icon="instagram" />
							</a>
						</Grid.Row>
					</Grid.Column>
					<Grid.Column>Address</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Footer;
