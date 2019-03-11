import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Student from './components/Student/Student'
import Client from './components/Client/Client'
class App extends Component {
  state = { activeItem: 'Clients' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    let page;
    if(activeItem === 'Clients'){
      page =  <Client/>
    } else if (activeItem === 'Students'){
      page =  <Student/>
    } else {
      page =  ''
    }
    return (
      <div className="App">
      <Nav handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
      {page}
      </div>
    );
  }
}

export default App;
