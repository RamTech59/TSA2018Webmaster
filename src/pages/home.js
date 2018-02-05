import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleSettings from '../utils/particleSettings'

class Home extends Component {
  centerText = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  render() {
    return (
      <div>
      <Particles
        params={
          ParticleSettings
        }
          canvasClassName="particles"
        />
        <div style={this.centerText}>
          <h1 className='text'>Company Name Goes Here</h1>
        </div>
      </div>
    );
  }
}

export default Home;
