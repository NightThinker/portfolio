import styled from 'styled-components';

export const NavigationItemsStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  @media (min-width: 500px) {
    flex-flow: row;
  }
`;
