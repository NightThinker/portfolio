import styled from 'styled-components';

export const ContainerStyle = styled.section`
  position: relative;
  height: calc(100vh - 53px);
`;

export const CanvasStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  /* height: calc(100vh - 106px); */
  canvas {
    width: 100vw;
    height: calc(100vh - 53px);
  }
`;

export const ContentStyle = styled.div`
  position: relative;
  display: flex;
  height: 75%;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
`;
