import styled from 'styled-components';

export const ImgStyle = styled.div`
  background-color: transparent;
  padding: 9px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  /* width: ${(props) => {
    console.log('TCL: props', props.widtht);
    return props.widtht || 'auto;';
  }}; */
  width: ${(props) => (props.width ? '300px' : 'auto')};
  /* width: 300px; */

  img {
    width: 100%;
  }
`;
