import React, { Component } from "react";
import { Button, Header, Image, Modal, Icon, Grid } from "semantic-ui-react";

class Bookbutton extends Component {
	state = { modalOpen: false };

	handleOpen = () => this.setState({ modalOpen: true });

	handleClose = () => this.setState({ modalOpen: false });

	render() {
		return (
			<div className="bookbutton">
				<Modal
					trigger={
						<Button onClick={this.handleOpen} id="book" color="yellow">
							Book an Appointment
						</Button>
					}
					open={this.state.modalOpen}
					onClose={this.handleClose}
				>
					<Modal.Header>
						<Button color="red" onClick={this.handleClose}>
							X
						</Button>
						<h1>A few Questions to get you ready.</h1>
					</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							Options to accept will be here.
						</Modal.Description>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

export default Bookbutton;
