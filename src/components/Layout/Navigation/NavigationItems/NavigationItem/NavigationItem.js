import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationItemStyle } from './NavigationItemStyle';

const navigationItem = (props) => (
  <NavigationItemStyle>
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </NavigationItemStyle>
);

export default navigationItem;
