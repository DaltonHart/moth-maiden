import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Footer from '../Footer';

let parallax4 = {
	backgroundImage: `url()`,
	height: '70vh',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

class Team extends Component {
	redirectTeam = () => {
		this.props.history.push('/team');
	};
	render() {
		return (
			<>
				<div style={parallax4}>
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
						}}
						onClick={this.redirectTeam}>
						<p style={{ fontSize: '7em', textShadow: '5px 5px 5px #000000' }}>
							Team
						</p>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default withRouter(Team);
