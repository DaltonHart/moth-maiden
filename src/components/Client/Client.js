import React, { Component } from 'react';
import wood from '../assets/wood.jpg'
class Client extends Component {
  render() {
    let style = {
      backgroundImage: `url(${wood})`
    }
    return (
      <div style={style} className="clientpg">
        <div className="over">

        </div>
      </div>
    );
  }
}

export default Client;
