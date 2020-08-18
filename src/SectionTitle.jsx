import React from 'react';

import styled from '@emotion/styled';

import Divider from './Divider';
import { TitleFont, LeftContentPadding } from './common-styles';

const Title = styled('div')`
  ${TitleFont};
  ${LeftContentPadding};
  font-size: 2.5em;
  font-weight: bold;
  color: #FFFFFF;
  padding-top: 0.33em;
  @media screen and (min-width: 640px) {
    padding-top: 0.8em;
    color: ${props => props.titleColor};
  }
`;

export default ({ children, titleColor }) => (
  <React.Fragment>
    <Title titleColor={titleColor}>{children}</Title>
    <Divider color={titleColor} hideOnDesktop={true} />
  </React.Fragment>
);
