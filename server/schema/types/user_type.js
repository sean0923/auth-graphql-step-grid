const { GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  field: {
    email: { type: GraphQLString }
  },
})

module.exports = UserType;
