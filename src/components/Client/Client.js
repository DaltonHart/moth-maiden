import React, { Component } from 'react';
import wood from '../assets/wood.jpg'
class Client extends Component {
  render() {
    let style = {
      backgroundImage: `url(${wood})`
    }
    return (
      <div style={style} className="clientpg">
      <h1>Client page</h1>
      </div>
    );
  }
}

export default Client;
