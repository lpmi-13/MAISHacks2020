import React from 'react';
import styled from '@emotion/styled';

import Wrnch from './wrnch_white.png';
import Nvidia from './nvidia.png';
import Intact from './Intactlab_logo.png';

const LogoRow = styled('div')`
  display: flex;
  padding-bottom: 15px;
  max-height: 130px;
  @media screen and (min-width: 480px) {
    padding-bottom: 25px;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 30px;
  }
  :last-child {
    padding-bottom: 0;
  }
`;

const LogoWrapper = styled('a')`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-top: 0;
`;

const LogoImage = styled('img')`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  -webkit-user-drag: none;
`;

const Logo = ({ alt, src, href }) => (
  <LogoWrapper href={href} target="_blank" rel="noopener">
    <LogoImage alt={alt} src={src} />
  </LogoWrapper>
);

export default () => (
  <React.Fragment>
    <LogoRow>
      <Logo
        alt="Wrnch"
        src={Wrnch}
        href="https://wrnch.ai/careers/"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Nvidia"
        src={Nvidia}
        href="https://www.nvidia.com/en-us/"
      />
      <Logo
        alt="Intact"
        src={Intact}
        href="https://careers.intact.ca/ca/en"
      />
    </LogoRow>

  </React.Fragment>
);
