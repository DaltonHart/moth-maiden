import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Client from './components/Client/Client';
class App extends Component {
	state = { activeItem: 'Home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<div className="App">
				<Nav handleItemClick={this.handleItemClick} activeItem={activeItem} />
				<Client />
			</div>
		);
	}
}

export default App;
