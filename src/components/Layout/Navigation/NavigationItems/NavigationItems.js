import React from 'react';

import { NavigationItemsStyle } from './NavigationItemsStyle';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <NavigationItemsStyle>
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem link="/portfolio">Portfolio</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </NavigationItemsStyle>
);

export default navigationItems;
