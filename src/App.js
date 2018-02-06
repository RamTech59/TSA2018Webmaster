import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = () => {
  var theme = darkBaseTheme
  // theme.palette.primary1Color = cyan400
  theme.palette.alternateTextColor = '#ff5722'
  theme.palette.primary1Color = '#ffb74d'
  return theme
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme())}>
        <div className="App">
          <Home/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
