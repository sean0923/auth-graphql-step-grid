import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Query, graphql } from 'react-apollo';

import query_current_user from '../queries/query_current_user';

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentDidMount() {
      // console.log('aaaa');
    }

    // componentWillUpdate() {
    //   console.log('this.props: ', this.props);
    // }

    componentWillReceiveProps(nextProps) {
      const thisUser = this.props.data.user;
      console.log('thisUser: ', thisUser);
      const thisLoading = this.props.data.loading;
      console.log('thisLoading: ', thisLoading);

      const nextUser = nextProps.data.user;
      console.log('nextUser: ', nextUser);
      const nextLoading = nextProps.data.loading;
      console.log('nextLoading: ', nextLoading);

      // if (nextProps.data.user !== this.props.user) {
      //   if (!nextProps.data.user) {
      //     this.props.history.push('/signin');
      //   }
      // }
    }

    render() {
      // console.log('this.props: ', this.props);
      // if (!data.user) {
      //   this.props.history.push('/signin');
      // }

      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(graphql(query_current_user)(RequireAuth));
};
