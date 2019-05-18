import React, { Component } from 'react';

import Team from './Team';
import Services from './Services';
import Landing from './Landing';
import Testimonies from './Testimonies';
import Contact from './Contact';

import Bookbutton from './Bookbutton';

class Client extends Component {
	componentDidMount() {}
	render() {
		return (
			<div className="clientpg">
				<Landing />
			</div>
		);
	}
}

export default Client;
