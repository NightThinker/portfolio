import React from 'react';

import { TextStyle } from './TextStyle';

const Text = (props) => {
  return <TextStyle {...props}>{props.children}</TextStyle>;
};

export default Text;
