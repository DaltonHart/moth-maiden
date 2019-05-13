import React, { Component } from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

class Tile extends Component {
	state = {
		open: false,
		mouseOver: false
	};

	open = () => this.setState({ open: true });
	close = () => this.setState({ open: false });

	// Event handlers to modify state values
	mouseEnter = e => {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			});
		}
	};
	mouseLeave = e => {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			});
		}
	};
	clickHandler = e => {
		e.preventDefault();
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;

		return (
			<>
				<Modal
					open={open}
					onOpen={this.open}
					onClose={this.close}
					basic
					size="small">
					<Modal.Content>
						<img
							className="modalImg"
							src={this.props.data.image}
							alt={'brow'}
						/>
					</Modal.Content>
				</Modal>
				<div
					className="tile"
					style={{
						width: '18vw',
						height: '18vw',
						filter: 'drop-shadow(5px 5px 5px #000)'
					}}>
					<img
						onMouseEnter={this.mouseEnter}
						onMouseLeave={this.mouseLeave}
						onClick={this.clickHandler}
						src={this.props.data.image}
						alt={this.props.data.name}
					/>
				</div>
			</>
		);
	}
}

export default Tile;
