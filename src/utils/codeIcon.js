import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {indigoA400} from 'material-ui/styles/colors';

const CodeIcon = (props) => (
  <SvgIcon {...props} color={'#000000'} style={{MarginTop: '10px'}}>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </SvgIcon>
);

export default CodeIcon;
