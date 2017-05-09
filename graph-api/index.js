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

const Users = require('./schemas/users');

const RootQuery = new GraphQLObjectType({
  name: 'OpenRootQuery',
  description: 'Open root query',
  fields: () => {
    return {
      users: {
        type: Users.Schema,
        resolve(root, args, req){
          return{
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john_doe@example.com'
          };
        }
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = Schema;