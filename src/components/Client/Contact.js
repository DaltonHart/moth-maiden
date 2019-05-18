import React, { Component } from 'react';
import {
	Container,
	Segment,
	Form,
	Input,
	TextArea,
	Button,
	Header,
	Grid,
	Icon
} from 'semantic-ui-react';

class Contact extends Component {
	render() {
		return (
			<div className="sectionFull" style={{ backgroundColor: 'black' }}>
				<Container
					style={{
						height: '100%',
						width: '70vw',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<Segment
						style={{
							height: '70vh',
							width: '70vw',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '0'
						}}>
						<Grid style={{ width: '100%', height: '100%' }}>
							<Grid.Row style={{ padding: '0' }}>
								<Grid.Column width={8}>left</Grid.Column>
								<Grid.Column width={8} style={{ backgroundColor: '#557D5B' }}>
									<Form
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											padding: '.3em',
											height: '100%',
											color: 'white'
										}}>
										<Header style={{ color: 'white' }} as="h2" icon>
											<Icon name="mail" />
											Contact Us
										</Header>
										<Form.Field style={{ width: '80%' }}>
											<Input iconPosition="left" placeholder="Name">
												<Icon name="user" />
												<input />
											</Input>
										</Form.Field>
										<Form.Field style={{ width: '80%' }}>
											<Input required iconPosition="left" placeholder="Email">
												<Icon name="at" />
												<input />
											</Input>
										</Form.Field>
										<Form.Field style={{ width: '80%' }}>
											<TextArea
												style={{ resize: 'none' }}
												placeholder="How may we help?"
											/>
										</Form.Field>
										<Form.Field style={{ width: '80%' }}>
											<Button type="submit" fluid icon>
												<Icon name="send" /> Send
											</Button>
										</Form.Field>
									</Form>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Container>
			</div>
		);
	}
}

export default Contact;
