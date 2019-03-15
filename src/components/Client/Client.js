import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Bookbutton from './Bookbutton'
import wood from '../assets/wood.jpg'
class Client extends Component {
  render() {
    let style = {
      // backgroundImage: `url(${wood})`
      backgroundColor: `red`
    }
    return (
      <div className="clientpg">
        <div className="over">
        <Bookbutton/>
        <Parallax  ref='parallax' pages={2}>
          <Parallax.Layer
              offset={0}
              speed={0.5}>
              <span >Layers can contain anything</span>
          </Parallax.Layer>
          <Parallax.Layer
              style={style}
              offset={1}
              speed={0.5}>
              <span>Layers can contain almost anything</span>
          </Parallax.Layer>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Client;
