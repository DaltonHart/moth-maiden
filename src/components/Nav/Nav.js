import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Menu size='small'>
        <Menu.Item name='MOTH MAIDEN | Tattoo & PMU' />


        <Menu.Menu position='right'>
        <Menu.Item
          name='Clients'
          active={activeItem === 'Clients'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Students'
          active={activeItem === 'Students'}
          onClick={this.handleItemClick}
        />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Nav;
