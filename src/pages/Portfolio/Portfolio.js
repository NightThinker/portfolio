import React from 'react';
import Project from '../../components/Content/Project/Project';
import login from '../../assets/images/tat-login.png';
import web from '../../assets/images/scg-web.png';
import admin from '../../assets/images/scg-admin.png';
import dic from '../../assets/images/scg-dic.png';
import er from '../../assets/images/scg-ER-diagram.png';

import { ContainerStyle, PortfolioStyle } from './PortfolioStyle';
import Text from '../../components/UI/Text/Text';

function Portfolio() {
  return (
    <ContainerStyle>
      <Text type="h1" m="40px 0">
        Project
      </Text>
      <PortfolioStyle>
        <Project img={login} />
        <Project img={web} />
        <Project img={admin} />
        <Project img={dic} />
        <Project img={er} />
        {/* <h1>Project</h1> */}
      </PortfolioStyle>
    </ContainerStyle>
  );
}

export default Portfolio;
