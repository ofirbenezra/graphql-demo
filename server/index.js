var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
var { makeExecutableSchema,addMockFunctionsToSchema  } = require('graphql-tools');

var typeDefs = [`
type Query {
  hello: String
  description: String
  id:Int
}

schema {
  query: Query
}`];

// var resolvers = {
//     Query: {
//         hello(root) {
//             return 'world';
//         },
//         description(root){
//             return 'description';
//         }
//     }
// };

var schema = makeExecutableSchema({typeDefs});
// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));