import React from 'react';
import styled from '@emotion/styled';

import { SectionBase, SectionTextContent } from '../common-styles';

import { SectionLeftColumn, SectionRightColumn, SectionContent } from './style';

import SectionTitle from '../SectionTitle';

const Container = styled('div')`
  background-color: #2B1963;
  ${SectionBase({
    heightPx: 250,
    //extHeightPx: 4096,
//    backgroundImage: `url(${AboutGradient}), url(${AboutGradientExt})`,
  //  backgroundIpadImage: `url(${AboutGradient}), url(${AboutGradientExt})`
  })};
  @media screen and (max-width: 640px){
    ${SectionBase({
      heightPx: 200,
    })};
  }
  @media screen and (max-width: 1025px){
    ${SectionBase({
      heightPx: 250,
    })};
  }
`;

const AboutPeople = styled('img')`
  position: absolute;
  top: 4em;
  bottom: 4m;
  display: none;
  width: 35%;
  height: auto;
  @media screen and (min-width: 1025px) {
    display: block;
    width: 500px;
    height: auto;
  }
`;


export default ({ id, titleColor }) => (
  <Container id={id}>
    <SectionTitle titleColor={titleColor}>
      {' '}
      MONTREAL'S LARGEST <br /> AI HACKATHON
    </SectionTitle>
    <SectionContent columns={true}>
      <SectionLeftColumn>
        <SectionTextContent>
          <p>
            Innovation lies at the heart of MAIS Hacks, with past winners
            building applications and solutions for topics ranging from music
            composition, plant pathology, and security patrols.
          </p>

          <p>
            Regardless of whether you’re an AI novice or veteran, everyone is
            welcome to join. We want you to bring life, a desire to learn about
            AI, and how it can be used to overcome societal problems and boost
            competitiveness. Bring your best ideas for a fruitful weekend, and
            we’ll provide the mentors, computing credits, and swag.{' '}
          </p>
        </SectionTextContent>
      </SectionLeftColumn>
      <SectionRightColumn>
        <AboutPeople src={require('./about_head.png')} />
      </SectionRightColumn>
    </SectionContent>
  </Container>
);
