import React, { useState } from 'react';
import map from 'lodash/map';

import Text from '../../components/UI/Text/Text';
import Img from '../../components/UI/Img/Img';
import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import {
  ContainerStyle,
  ContentStyle,
  ContentHexagonStyle,
  HexagonStyle,
  AboutStyle,
  AboutTextStyle,
  ContainerSkillStyle,
  ContentSkillStyle,
  DetailSkillStyle,
  DetailTextSkillStyle
} from './AboutStyle';
import Profile from '../../assets/images/IMG_6522.JPG';

function About() {
  const [about, setAbout] = useState([
    {
      title: 'Fast',
      desc: 'Fast load times and lag free interaction, my highest priority'
    },
    {
      title: 'Responsive',
      desc: 'My layouts will work on any device, big or small.'
    },
    {
      title: 'Dynamic',
      desc: "Websites don't have to be static, I love making pages come to life."
    }
  ]);

  const [skill, setSkill] = useState([
    {
      title: 'HTML5',
      percent: 90
    },
    {
      title: 'CSS',
      percent: 80
    },
    {
      title: 'ReactJs',
      percent: 80
    },
    {
      title: 'Javascript',
      percent: 80
    },
    {
      title: 'Redux saga',
      percent: 40
    },
    {
      title: 'Styled Component',
      percent: 60
    },
    {
      title: 'Jquery',
      percent: 30
    },
    {
      title: 'Bootstrap',
      percent: 30
    },
    {
      title: 'React Native(expo)',
      percent: 80
    },
    {
      title: 'NodeJs',
      percent: 60
    },
    {
      title: 'MongoDB',
      percent: 40
    },
    {
      title: 'MySQL',
      percent: 50
    },
    {
      title: 'Photoshop',
      percent: 20
    },
    {
      title: 'Sketch',
      percent: 20
    }
  ]);

  return (
    <ContainerStyle>
      <ContentStyle>
        {map(about, (item) => (
          <AboutStyle key={item.title}>
            <ContentHexagonStyle>
              <HexagonStyle>t</HexagonStyle>
            </ContentHexagonStyle>
            <AboutTextStyle>
              <Text type="h3" m="15px 0 5px 0">
                {item.title}
              </Text>
              <Text type="h5">{item.desc}</Text>
            </AboutTextStyle>
          </AboutStyle>
        ))}
      </ContentStyle>
      <ContainerSkillStyle>
        <ContentSkillStyle p="0 50px 0 50px">
          <AboutTextStyle>
            <Img src={Profile} width="300px" />
            <Text type="h3" m="20px 0 15px 0">
              Who's this guy?
            </Text>
            <Text type="h5">
              My name is Jiraphon Neetithamrangsi, I'm currently working as a Front-End Web Developer with 2 years
              experience. My job role is about developing website using Framework ReactJs, Redux Saga, API (REST API,
              GraphQL) and I had an opportunity to work with Back End Team in database design and Developing GraphQL API
              using NodeJs.
            </Text>
          </AboutTextStyle>
        </ContentSkillStyle>
        <ContentSkillStyle>
          {skill.map((item) => (
            <DetailSkillStyle>
              <DetailTextSkillStyle>
                <Text>{item.title}</Text>
              </DetailTextSkillStyle>
              <ProgressBar percent={item.percent} pointTotal={item.percent} />
            </DetailSkillStyle>
          ))}
        </ContentSkillStyle>
      </ContainerSkillStyle>
    </ContainerStyle>
  );
}

export default About;
