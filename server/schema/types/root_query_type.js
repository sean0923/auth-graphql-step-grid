const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parent, args, req) {
        return req.user; // if user is authenticated then passport will attach user into req
      },
    },
  },
});

module.exports = RootQueryType;
