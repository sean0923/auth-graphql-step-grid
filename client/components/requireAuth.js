import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import query_current_user from '../queries/query_current_user';

export default WrappedComponent => {
  class RequireAuth extends Component {
    render() {
      return (
        <Query query={query_current_user}>
          {({ loading, error, data }) => {
            if (loading) {
              return <WrappedComponent {...this.props} />;
            }

            if (error) {
              return <WrappedComponent {...this.props} />;
            }

            if (!data.user) {
              this.props.history.push('/signin');
            }

            return <WrappedComponent {...this.props} />;
          }}
        </Query>
      );
    }
  }

  return withRouter(RequireAuth);
};
