import React, { Component } from 'react';

import Landing from './Landing';
import Footer from '../Footer';

class Client extends Component {
	componentDidMount() {}
	render() {
		return (
			<>
				<div className="clientpg">
					<Landing />
				</div>
			</>
		);
	}
}

export default Client;
