import React from 'react';

import { ProjectStyle, ImgStyle } from './ProjectStyle';
// import Img from '../../UI/Img/Img';

const Project = (props) => {
  return (
    <ProjectStyle>
      <ImgStyle imgUrl={props.img} />
    </ProjectStyle>
  );
};

export default Project;
