import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

import NavItem from './header/NavItem';

import routeNamesAndLinks from '../data/routeNamesAndLinks';

import query_current_user from '../../queries/query_current_user';

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const Header = ({ onDogSelected }) => (
  <Query query={query_current_user}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      console.log('data: ', data);

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
    }}
  </Query>
);
export default Header;
