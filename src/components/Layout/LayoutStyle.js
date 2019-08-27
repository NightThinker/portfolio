import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(872px, auto) 1fr;
  grid-template-rows: 53px auto;
  grid-template-areas:
    '. header .'
    '. main .';
`;

export const HeaderStyle = styled.div`
  /* grid-area: header; */
  height: 53px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #181f27;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export const NavStyle = styled.nav`
  height: 100%;
`;

export const LogoStyle = styled.div`
  height: 80%;
`;
export const MainStyle = styled.main`
  /* grid-area: main; */
  margin-top: 53px;
  display: flex;
  justify-content: space-around;
`;
