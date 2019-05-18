import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import services from '../assets/services.png';
let parallax2 = {
	backgroundImage: `url(${services})`,
	height: '70vh',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

class Services extends Component {
	redirectServices = () => this.props.history.push('/services');
	render() {
		return (
			<div style={parallax2} onClick={this.redirectServices}>
				<div
					className="title"
					style={{
						border: '1em solid white',
						color: 'white',
						padding: '2em',
						width: '70%',
						height: '70%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<p style={{ fontSize: '7em', textShadow: '5px 5px 5px #000000' }}>
						Services
					</p>
				</div>
			</div>
		);
	}
}

export default withRouter(Services);
