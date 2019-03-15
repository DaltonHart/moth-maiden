import React, { Component } from "react";
import {
	Button,
	Header,
	Modal,
	ModalActions,
	Checkbox
} from "semantic-ui-react";

class Bookbutton extends Component {
	state = {
		modalOpen: false,
		canSubmit: false
	};

	show = size => () => this.setState({ size, open: true });

	close = () => this.setState({ open: false });

	render() {
		const { open, size } = this.state;
		return (
			<div className="bookbutton">
				<Modal
					trigger={
						<Button onClick={this.show("small")} id="book">
							Book an Appointment
						</Button>
					}
					dimmer="inverted"
					onClose={this.handleClose}
					size={size}
					open={open}
				>
					<Modal.Header>
						{/* <Button color="red" onClick={this.handleClose}>
							X
						</Button> */}
						<Header>A few Questions to get you ready.</Header>
					</Modal.Header>
					<Modal.Content className="modaldesc">
						<Checkbox
							name="one"
							label="This is a long option to check if they are ready."
						/>
						<Checkbox
							name="two"
							label="This is a long option to check if they are ready."
						/>
						<Checkbox
							name="three"
							label="This is a long option to check if they are ready."
						/>
						<Checkbox
							name="four"
							label="This is a long option to check if they are ready."
						/>
					</Modal.Content>
					<Button id="submit" color="green" fluid onClick={this.close}>
						Book
					</Button>
				</Modal>
			</div>
		);
	}
}

export default Bookbutton;
