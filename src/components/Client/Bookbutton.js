import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const requirements = ['one', 'two', 'three'];
class Bookbutton extends Component {
	state = {
		modalOpen: false,
		canBook: false,
		options: []
	};

	componentDidMount() {
		requirements.forEach((option, key) => {
			this.setState({ [key]: false });
		});
	}

	show = size => () => this.setState({ size, open: true });

	close = () => this.setState({ open: false });

	handleOption = optionNum => e => {
		const checked = e.target.checked;
		console.log('clicked', e.target.checked);
		this.setState({ [optionNum]: checked });
	};

	render() {
		const { open, size, canBook } = this.state;

		let book;
		canBook
			? (book = (
					<Button id="submit" color="green" fluid onClick={this.close}>
						Book
					</Button>
			  ))
			: (book = (
					<Button disabled id="submit" color="grey" fluid onClick={this.close}>
						Book
					</Button>
			  ));

		let options = requirements.map((option, key) => {
			return (
				<div className="ui checkbox" key={key}>
					<input type="checkbox" name={key} onClick={this.handleOption(key)} />
					<label>{option}</label>
				</div>
			);
		});

		return (
			<div className="bookbutton">
				<Modal
					trigger={
						<Button onClick={this.show('small')} id="book">
							Book an Appointment
						</Button>
					}
					dimmer="inverted"
					onClose={this.close}
					size={size}
					open={open}>
					<Modal.Header>
						{/* <Button color="red" onClick={this.handleClose}>
							X
						</Button> */}
						<Header>A few Questions to get you ready.</Header>
					</Modal.Header>
					<Modal.Content className="modaldesc">{options}</Modal.Content>
					{book}
				</Modal>
			</div>
		);
	}
}

export default Bookbutton;
