import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleSettings from '../utils/particleSettings'
import Typed from 'react-typed';
import AppMenuBar from '../components/AppMenuBar';
import {indigoA400} from 'material-ui/styles/colors';
import {description} from '../utils/strings'
import CodeIcon from '../utils/codeIcon';


class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      route: 'default',
      strings: ['Our robot manages your inventory'],
    }
  }
  centerText = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.route !== this.state.route) {
      this.typed.reset()
    }
  }

  render() {
    return (
      <div>
      {AppMenuBar(this)}
      <Particles
        params={
          ParticleSettings
        }
          canvasClassName="particles"
        />
        <div style={this.centerText}>
        {/*onComplete={(a) => {a.stop()}}*/}
        <Typed
          typedRef={(typed) => { this.typed = typed; }}
          strings={this.state.strings}
          typeSpeed={60}
          backSpeed={1}
          backDelay={1000}
          className='text'
          style={{color: indigoA400}}
        />
          <div className='box'>
            <span className='desc'>
            Robot Name :      E-Shelfers<br/><br/>
            A.I Name/version :   SelfShelfed  1.33.7<br/><br/>
            </span>
            <span className='desc'>
              &nbsp;&nbsp;&nbsp;&nbsp;{description(this.state.route)[0]}
            </span>
            <br/>
            <span className='desc'>
              {description(this.state.route)[1]}
            </span>
          </div>

          <div className="openSrc">
            <a href="https://github.com/RamTech59/TSA2018Webmaster">
              <span>We <span className="heart">❤</span> open source, check us out on GitHub </span>
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
