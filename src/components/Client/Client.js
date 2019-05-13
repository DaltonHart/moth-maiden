import React, { Component } from 'react';

import Team from './Team';
import Services from './Services';
import Landing from './Landing';
import Testimonies from './Testimonies';

import Bookbutton from './Bookbutton';

class Client extends Component {
	componentDidMount() {}
	render() {
		return (
			<div className="clientpg">
				{/* Booking Button */}
				<Bookbutton />

				{/* landing */}
				<Landing />

				{/* Services */}
				<Services />

				{/* Team section */}
				<Team />

				{/* Testimonies and Reviews */}
				<Testimonies />
			</div>
		);
	}
}

export default Client;
