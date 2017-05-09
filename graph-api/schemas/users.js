const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');


const Schema = new GraphQLObjectType({
  name: 'Users',
  description: 'List of users',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(data){
          return data.id;
        }
      },
      first_name: {
        type: GraphQLString,
        resolve(data){
          return data.first_name;
        }
      },
      last_name: {
        type: GraphQLString,
        resolve(data){
          return data.last_name;
        }
      },
      email: {
        type: GraphQLString,
        resolve(data){
          return data.email;
        }
      },
    }
  }
});

module.exports = {Schema};