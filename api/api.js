import resolvers from "./resolvers";
import typeDefs from "./schema";

const { ApolloServer } = require('apollo-server');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.API_PORT;
server.listen(port).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
