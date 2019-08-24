import React from 'react';
import PropTypes from 'prop-types';

import { ButtonSubmitStyle, ButtonDefaultStyle } from './ButtonStyle';

const Button = (props) => {
  const { type, children, ...otherProps } = props;

  return type === 'submit' ? (
    <ButtonSubmitStyle {...otherProps}>
      <span>{children}</span>
    </ButtonSubmitStyle>
  ) : (
    <ButtonDefaultStyle {...otherProps}>
      <span>{children}</span>
    </ButtonDefaultStyle>
  );
};

Button.defaultProps = {
  type: ''
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;
