import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Layout from './components/Layout';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
