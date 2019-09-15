import db from "./models/db";
import populate from "./populate";
import resolvers from "./resolvers";
import typeDefs from "./schema";

function main () {
  const { ApolloServer } = require('apollo-server');

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: false,
    introspection: !!process.env.GRAPHQL_INTROSPECTION,
    playground: !!process.env.GRAPHQL_PLAYGROUND,
    context: ({ req }) => {
      return {
        db: db,
      };
    },
  });

  const port = process.env.API_PORT;
  server.listen(port).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

switch (process.env.API_MODE) {
  case 'populate':
    console.log('Populating Database');
    populate(db);
    break;
  case 'create':
    console.log('Creating Database');
    db.sequelize.sync();
    break;
  case 'drop':
    console.log('Dropping Database');
    db.sequelize.drop();
    break;
  default:
    main();
}
