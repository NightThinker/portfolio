import styled, { css } from 'styled-components';

import {
  ClickAble,
  LightShadow,
  WhiteColor,
  RedGdColor,
  RedGdHoverColor,
  BlueColor,
  MarginPadding
} from '../../../styles/Styles';

const ButtonStyle = styled.button`
    padding: 10px 20px;
    /* box-sizing: inherit;
    display: inline-block;
    transition: all .5s;
    cursor: pointer; */
    border: 2px solid #fff;
  text-align: center;
  font-weight: lighter;
  position: relative;

  z-index: 1;
  font-size: 16px;

  font-family: inherit;
  background: transparent;
  /* font-family: "Product Sans"; */

  span {
    position: relative;
    z-index: 3;
  }


  ${css`
    ${ClickAble}
  `}

  /* Speace */
  ${MarginPadding}

  /* &:active, &:hover {
    ${LightShadow}
  } */

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonSubmitStyle = styled(ButtonStyle)`
  color: ${WhiteColor};
  background-image: ${RedGdColor};

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.3em;
    background-image: ${RedGdHoverColor};
    transition: opacity 0.5s ease-out;
    z-index: 2;
    opacity: 0;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

export const ButtonDefaultStyle = styled(ButtonStyle)`
  color: ${WhiteColor};
  transition: all 0.5s;

  &:hover {
    background: ${BlueColor};
    border-color: ${BlueColor};
    opacity: 1;
  }
`;
