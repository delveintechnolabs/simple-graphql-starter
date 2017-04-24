const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull
} = require('graphql');
const { GraphQLError } = require('graphql/error');

const RootQuery = new GraphQLObjectType({
  name: 'OpenRootQuery',
  description: 'Open root query',
  fields: () => {
    return {
      //Your queries go here.
    }
  }
});

const Schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = Schema;