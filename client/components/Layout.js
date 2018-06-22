import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from './layout/Header';
import Routes from './Routes';

import React from 'react';

const BodyWrapper = styled.div`padding: 30px;`;
const HeaderWrapper = BodyWrapper.extend`border-bottom: 1px solid #333;`;

const Layout = () => {
  return (
    <HashRouter>
      <div>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Routes />
        </BodyWrapper>
      </div>
    </HashRouter>
  );
};

export default Layout;
