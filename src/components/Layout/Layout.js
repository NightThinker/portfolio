import React from 'react';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import { HeaderStyle, MainStyle, NavStyle, LogoStyle } from './LayoutStyle';

import Logo from './Logo/Logo';

function Layout(props) {
  return (
    <React.Fragment>
      <HeaderStyle>
        <LogoStyle>
          <Logo />
        </LogoStyle>

        <NavStyle>
          <NavigationItems />
        </NavStyle>
      </HeaderStyle>
      <MainStyle>{props.children}</MainStyle>
    </React.Fragment>
  );
}

export default Layout;
