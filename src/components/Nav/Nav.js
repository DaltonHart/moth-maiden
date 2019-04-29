import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

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
		return (
			<div>
				<Menu className="nav" size="small">
					<Menu.Item name={companyname} />
					<Menu.Menu position="right">
						<Menu.Item
							name="Clients"
							active={activeItem === 'Clients'}
							onClick={this.props.handleItemClick}
						/>
						<Menu.Item
							name="Students"
							active={activeItem === 'Students'}
							onClick={this.props.handleItemClick}
						/>
					</Menu.Menu>
				</Menu>
				{subNav}
			</div>
		);
	}
}

export default Nav;
