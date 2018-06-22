import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import NavItem from './header/NavItem';

import routeNamesAndLinks from '../data/routeNamesAndLinks';

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const Header = () => {
  return (
    <div>
      <div>Header</div>
      <NavWrapper>
        {_.map(routeNamesAndLinks, ({ link, text }) => {
          return <NavItem key={link} link={link} text={text} />;
        })}
      </NavWrapper>
    </div>
  );
};

export default Header;
