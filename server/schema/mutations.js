const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = require('./types/user_type');

const AuthService = require('../services/auth');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, req) {
        return AuthService.signup({ email: args.email, password: args.password, req });
      },
    },
    logout: {
      type: UserType,
      resolve(parent, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
  },
});

module.exports = mutations;
