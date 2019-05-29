import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import { Link, animateScroll as Scroll } from 'react-scroll';
import { withRouter } from 'react-router-dom';

import moth from '../assets/moth.png';
import Bookbutton from '../Client/Bookbutton';

class Nav extends Component {
	state = { activeItem: 'Home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	scrollToTop = () => {
		Scroll.scrollToTop();
	};
	redirectHome = () => {
		this.props.history.push('/');
	};
	redirectServices = e => {
		this.props.history.push('/services');
	};

	redirectTeam = () => {
		this.props.history.push('/team');
	};

	render() {
		const { activeItem, location } = this.props;

		let style = {
			backgroundColor: '#b87333',
			fontFamily: 'Volkhov, serif'
		};

		return (
			<>
				<Menu style={style} className="nav" size="small" fixed="top">
					<Menu.Item
						name="Home"
						active={activeItem === 'Home'}
						onClick={
							location.pathname === '/' ? this.scrollToTop : this.redirectHome
						}>
						<img
							src={moth}
							style={{
								filter: 'invert(100%)'
							}}
							alt="logo"
						/>
					</Menu.Item>
					<Menu.Item>
						<Bookbutton />
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="About"
							active={activeItem === 'About'}
							onClick={this.redirectHome}>
							{location.pathname === '/' ? (
								<Link
									style={{ color: 'white' }}
									activeClass="active"
									to="about"
									smooth={true}
									offset={-100}
									duration={500}>
									About
								</Link>
							) : null}
						</Menu.Item>
						<Menu.Item
							name="Services"
							active={activeItem === 'Services'}
							onClick={this.redirectServices}>
							Services
						</Menu.Item>
						<Menu.Item
							name="Training"
							active={activeItem === 'Training'}
							onClick={this.handleItemClick}>
							Training
						</Menu.Item>
						<Menu.Item
							name="Team"
							active={activeItem === 'Team'}
							onClick={this.redirectTeam}>
							Team
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</>
		);
	}
}

export default withRouter(Nav);
