import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Layout from './components/Layout';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null,
});

const client = new ApolloClient({
  link: new HttpLink(),
  cache,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
