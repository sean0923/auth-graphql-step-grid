import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

import NavItem from './header/NavItem';

import routeNamesAndLinks, * as linkRelated from '../data/routeNamesAndLinks';

import query_current_user from '../../queries/query_current_user';

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const Header = () => (
  <Query query={query_current_user}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <div>Header</div>
          <NavWrapper>
            {_.map(routeNamesAndLinks, ({ link, text }) => {
              if (data.user && linkRelated.noRenderListIfLoggedIn.includes(link)) {
                return null;
              }

              if (!data.user && linkRelated.noRenderListIfLoggedOut.includes(link)) {
                return null;
              }

              return <NavItem key={link} link={link} text={text} />;
            })}
          </NavWrapper>
        </div>
      );
    }}
  </Query>
);
export default Header;
