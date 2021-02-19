import styled from 'styled-components';

export const ProjectStyle = styled.section`
  display: flex;
`;

export const ImgStyle = styled.div`
  width: 390px;
  height: 300px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
`;
