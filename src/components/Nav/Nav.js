import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import { Link, Element, Events, animateScroll as Scroll } from 'react-scroll';

import moth from '../assets/moth.png';
import Bookbutton from '../Client/Bookbutton';

class Nav extends Component {
	scrollToTop = () => {
		Scroll.scrollToTop();
	};

	render() {
		const { activeItem } = this.props;

		let style = {
			backgroundColor: '#b87333'
		};

		return (
			<>
				<Menu style={style} className="nav" size="small" fixed="top">
					<Menu.Item
						name="Home"
						active={activeItem === 'Home'}
						onClick={this.scrollToTop}>
						<img
							src={moth}
							style={{
								filter: 'invert(100%)'
							}}
							alt="logo"
						/>
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="About"
							active={activeItem === 'About'}
							onClick={this.props.handleItemClick}>
							<Link
								style={{ color: 'white' }}
								activeClass="active"
								to="about"
								smooth={true}
								offset={-100}
								duration={500}>
								About
							</Link>
						</Menu.Item>
						<Menu.Item
							name="Clients"
							active={activeItem === 'Clients'}
							onClick={this.props.handleItemClick}>
							Services
						</Menu.Item>
						<Menu.Item
							name="Training"
							active={activeItem === 'Training'}
							onClick={this.props.handleItemClick}>
							Training
						</Menu.Item>
						<Menu.Item
							name="Team"
							active={activeItem === 'Team'}
							onClick={this.props.handleItemClick}>
							Team
						</Menu.Item>
						<Menu.Item>
							<Bookbutton />
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</>
		);
	}
}

export default Nav;
