import styled from 'styled-components';

import { MarginPadding } from '../../styles/Styles';

export const ContainerStyle = styled.section`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  justify-content: space-around;
`;
export const ContentStyle = styled.div`
  display: flex;
  /* text-align: center;
  position: relative;
  display: inline-block; */
  /* width: 80px;
  height: 80px; */
  justify-content: space-around;
`;

export const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const ContainerSkillStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
`;

export const ContentSkillStyle = styled.div`
  display: flex;
  width: 50%;
  ${MarginPadding}
  flex-direction: column;
`;

export const DetailSkillStyle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const DetailTextSkillStyle = styled.div`
  display: flex;
  width: 200px;
  background-color: #04c2c9;

  color: #fff;
`;

export const AboutTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContentHexagonStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  position: relative;
`;
export const HexagonStyle = styled.div`
  background-color: #04c2c9;
  height: 100%;
  width: calc(100% * 0.57735);
  display: inline-block;
  &::before {
    position: absolute;
    top: 0;
    right: calc((100% / 2) - ((100% * 0.57735) / 2));
    background-color: inherit;
    height: inherit;
    width: inherit;
    content: '';
    transform: rotateZ(60deg);
  }
  &::after {
    position: absolute;
    top: 0;
    right: calc((100% / 2) - ((100% * 0.57735) / 2));
    background-color: inherit;
    height: inherit;
    width: inherit;
    content: '';
    transform: rotateZ(-60deg);
  }
`;
