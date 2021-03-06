import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Query, graphql } from 'react-apollo';

import query_current_user from '../queries/query_current_user';

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      const { user, loading } = nextProps.data;
      if (!user && !loading) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(graphql(query_current_user)(RequireAuth));
};
