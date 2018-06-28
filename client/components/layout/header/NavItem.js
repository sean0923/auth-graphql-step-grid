import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Mutation } from 'react-apollo';

import * as routeNamesAndLinks from '../../data/routeNamesAndLinks';

import query_current_user from '../../../queries/query_current_user';
import mutation_logout from '../../../mutations/mutation_logout';

const StyledA = styled.a`cursor: pointer;`;

const handleSignOutClick = (history, mutation) => {
  mutation({
    refetchQueries: [{ query: query_current_user }],
  });
  // history.push('/');
};

const Button = ({ text, link, history }) => {
  return (
    <Mutation mutation={mutation_logout}>
      {(mutation, { data }) => {
        if (link === routeNamesAndLinks.LINK_SIGN_OUT) {
          return (
            <div>
              <StyledA onClick={() => handleSignOutClick(history, mutation)} to={link}>
                {text}
              </StyledA>
            </div>
          );
        }

        return (
          <div>
            <Link to={link}>{text}</Link>
          </div>
        );
      }}
    </Mutation>
  );
};

export default withRouter(Button);
