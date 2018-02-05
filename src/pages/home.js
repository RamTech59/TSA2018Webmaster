import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleSettings from '../utils/particleSettings'
import Typed from 'react-typed';

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
        <Typed
          strings={['We make robots that do things', 'We make robots that do other things', 'We make robots that do even more things']}
          typeSpeed={60}
          backSpeed={1}
          backDelay={1000}
          onComplete={(a) => {a.stop()}}
          loop
          className='text'
        />
        </div>
      </div>
    );
  }
}

export default Home;
