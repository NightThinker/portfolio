import React from 'react';

import { ImgStyle } from './ImgStyle';

const logo = (props) => {
  console.log('TCL: logo -> props', props);
  return (
    <ImgStyle width={props.width}>
      <img src={props.src} alt="Img" />
    </ImgStyle>
  );
};

export default logo;
