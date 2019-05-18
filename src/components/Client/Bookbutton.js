import React, { Component } from 'react';
import { Button, Header, Modal, Icon, Menu } from 'semantic-ui-react';

const requirements = [
	'I am over the age of 18.',
	'I am free of all blood-thinning medications.',
	'I agree to disclosure any medical conditions, daily medications, or allergies prior to booking.'
];
class Bookbutton extends Component {
	state = {
		modalOpen: false,
		canBook: false,
		totalChecked: 0
	};

	componentDidMount() {}

	show = size => () => this.setState({ size, open: true });

	close = () => this.setState({ open: false });

	handleOption = e => {
		console.log(e.target.checked);
		if (e.target.checked === true) {
			this.setState({
				totalChecked: this.state.totalChecked + 1
			});
			console.log('trigger checked');
			console.log(this.state.totalChecked, requirements.length - 1);
			if (this.state.totalChecked === requirements.length - 1) {
				this.setState({
					canBook: true
				});
			}
		} else {
			this.setState({
				totalChecked: this.state.totalChecked - 1
			});
			if (this.state.totalChecked !== requirements.length - 1) {
				this.setState({
					canBook: false
				});
			}
		}
	};

	render() {
		const { open, size, canBook } = this.state;

		let book;
		canBook
			? (book = (
					<Button
						as="a"
						href="https://square.site/appointments/book/1MK0H2ZGAJ2ME/moth-maiden-tattoo-pmu-fresno-ca"
						id="submit"
						color="green"
						fluid>
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
					<input
						type="checkbox"
						id={key}
						name={key}
						onClick={this.handleOption}
					/>
					<label for={key}>{option}</label>
				</div>
			);
		});

		return (
			<div className="bookbutton">
				<Modal
					trigger={<Button onClick={this.show('small')}>Book Now</Button>}
					dimmer
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
