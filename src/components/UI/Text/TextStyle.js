import styled, { css } from 'styled-components';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  WeightBold,
  BlackColor,
  WhiteColor,
  White50Color,
  Gray70Color,
  Gray50Color,
  Gray30Color,
  MarginPadding
} from '../../../styles/Styles';

export const TextStyle = styled.span`
  word-wrap: break-word;
  width: ${(props) => props.width || 'auto;'};
  min-width: ${(props) => props.width || 'auto;'};
  display: ${(props) => props.dp || 'inline-block;'};
  line-height: ${(props) => props.lh};
  
  /* Other */
  ${(props) => {
    const { clickAble, center, underline, threeDot } = props;

    return css`
      ${clickAble ? `cursor: pointer;` : ''}
      ${center ? `text-align: center;` : ''}

      ${underline ? `text-decoration: underline;` : ''}

      ${
        threeDot
          ? `
          white-space: nowrap; 
          overflow: hidden;
          text-overflow: ellipsis;
        `
          : ''
      }
    `;
  }}

  /* weight */
  ${({ bold }) => bold && WeightBold}

  /* Color */
  ${({ color }) => {
    switch (color) {
      case 'black':
        return css`
          color: ${BlackColor};
        `;
      case 'white':
        return css`
          color: ${WhiteColor};
        `;
      case 'white50':
        return css`
          color: ${White50Color};
        `;
      case 'gray70':
        return css`
          color: ${Gray70Color};
        `;
      case 'gray50':
        return css`
          color: ${Gray50Color};
        `;
      case 'gray30':
        return css`
          color: ${Gray30Color};
        `;

      default:
        return css`
          color: ${Gray70Color};
        `;
    }
  }}

  /* Type */
  ${({ type }) => {
    switch (type) {
      //
      case 'h1' || 'H1':
        return H1;
      // 44px
      case 'h2' || 'H2':
        return H2;
      // 24px
      case 'h3' || 'H3':
        return H3;
      // 16px
      case 'h4' || 'H4':
        return H4;
      // 13px
      case 'h5' || 'H5':
        return H5;
      // 11px
      case 'h6' || 'H6':
        return H6;

      default:
        return H4;
    }
  }}

  /* Space */
 
  ${MarginPadding}

  span {
    color: #E31B6D;
  }
`;
