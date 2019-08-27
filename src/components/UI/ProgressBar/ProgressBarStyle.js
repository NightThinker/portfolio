import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width: 100%;
  height: 30px;
  border: 0;
  background-color: #d6d6d6;
  /* border-radius: 5px; */
  position: relative;
  /* margin: 0 0 8px 0; */
`;

export const FillerStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00a1a7;
  /* background-image: linear-gradient(to right, #a71b1a, #ee2524); */
  height: 100%;
  transition: all 0.8s ease-in;
  width: ${(props) => `${props.width}%` || '0'};
  /* border-radius: 5px; */
`;

export const PointCountStyle = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 30px;
  right: 10px;
  line-height: normal;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;
