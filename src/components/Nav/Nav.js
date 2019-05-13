import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import moth from '../assets/moth.png';

class Nav extends Component {
	render() {
		let companyname = `MOTH MAIDEN`;
		const { activeItem } = this.props;

		let subNav;

		if (activeItem === 'Clients') {
			subNav = (
				<Menu className="subnav client" size="small">
					<Menu.Item name="clientsub" />
					<Menu.Menu position="right" />
				</Menu>
			);
		} else if (activeItem === 'Students') {
			subNav = (
				<Menu className="subnav student" size="small">
					<Menu.Item name="Student Sub" />
					<Menu.Menu position="right" />
				</Menu>
			);
		} else {
			subNav = '';
		}

		let style = {
			backgroundColor: '#ffc74f'
		};

		return (
			<>
				<Menu style={style} className="nav" size="small" fixed="top">
					<Menu.Item>
						<img
							src={moth}
							style={{
								filter: 'invert(100%)'
							}}
							alt="logo"
						/>
						{companyname}
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="Clients"
							active={activeItem === 'Clients'}
							onClick={this.props.handleItemClick}>
							<Icon name="tint" /> Services
						</Menu.Item>
						<Menu.Item
							name="Students"
							active={activeItem === 'Students'}
							onClick={this.props.handleItemClick}>
							<Icon name="book" /> Training
						</Menu.Item>
					</Menu.Menu>
				</Menu>
				{/* {subNav} */}
			</>
		);
	}
}

export default Nav;
