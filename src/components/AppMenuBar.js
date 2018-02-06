import React from 'react';
import AppBar from 'material-ui/AppBar';
import HomeIcon from '../utils/homeIcon';
import {indigoA400, cyan400} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';


const AppMenuBar = (context) => (
    <AppBar
      title="Minerva"
      iconElementLeft={<HomeIcon style={{marginTop: '10px'}}/>}
      color='#000'>
      <MenuItem primaryText="Uses (Purpose)" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {context.setState({route: 'default', strings: ['Our robot manages your inventory']})}} />
      <MenuItem primaryText="Benefits" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {context.setState({route: 'benefits', strings: ['Our robots helps people']})}} />
      <MenuItem primaryText="Technologies" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {context.setState({route: 'tech', strings: ['Our robots can learn']})}}/>
      <MenuItem primaryText="Safety" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {context.setState({route: 'safety', strings: ['Our robots are safe']})}}/>
      <MenuItem primaryText="Liabilities" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {context.setState({route: 'liabilities', strings: ['Robots arent perfect']})}}/>
      <MenuItem primaryText="Costs" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {context.setState({route: 'costs', strings: ['Our robots are really helpful']})}}/>
      <MenuItem primaryText="TSA" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {window.location = 'http://coralparktsa.herokuapp.com/'}}/>
      <MenuItem primaryText="CTE" style={{ color: '#ff5722', marginTop: '10px' }} onClick={(e) => {window.location = 'http://www.ramtech59.com/'}}/>
    </AppBar>
);

export default AppMenuBar;
