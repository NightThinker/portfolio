import { css } from 'styled-components';

const MarginPadding = css`
  /* Speace */
  ${(props) => {
    const { m, mt, mb, ml, mr, p, pt, pb, pl, pr } = props;

    return `
      ${m ? `margin: ${m};` : ''}
      ${mt ? `margin-top: ${mt};` : ''}
      ${mb ? `margin-bottom: ${mb};` : ''}
      ${ml ? `margin-left: ${ml};` : ''}
      ${mr ? `margin-right: ${mr};` : ''}

      ${p ? `padding: ${p};` : ''}
      ${pt ? `padding-top: ${pt};` : ''}
      ${pb ? `padding-bottom: ${pb};` : ''}
      ${pl ? `padding-left: ${pl};` : ''}
      ${pr ? `padding-right: ${pr};` : ''}
    `;
  }}
`;

export default MarginPadding;
