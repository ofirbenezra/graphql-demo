import  { GraphQLSchema, GraphQLObjectType} from 'graphql';

const QueryType = new GraphQLObjectType({
  name : 'Query',
  description: '....'
});
export default new GraphQLSchema({
    Query: QueryType
})