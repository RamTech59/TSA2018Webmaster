import React from 'react';
import AppBar from 'material-ui/AppBar';
import HomeIcon from '../utils/homeIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigoA400, cyan400} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';

const theme = () => {
  var theme = darkBaseTheme
  // theme.palette.primary1Color = cyan400
  theme.palette.alternateTextColor = '#ff5722'
  theme.palette.primary1Color = '#ffb74d'
  return theme
}

const AppMenuBar = (context) => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme())}>
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
  </MuiThemeProvider>
);

export default AppMenuBar;
