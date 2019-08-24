import React from 'react';

import mayLogo from '../../../assets/images/may-logo.png';
import { LogoStyle } from './LogoStyle';

const logo = (props) => (
  <LogoStyle>
    <img src={mayLogo} alt="May" />
  </LogoStyle>
);

export default logo;
