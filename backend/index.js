const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schemas");
const { db } = require("./db");
const { Query } = require("./resolvers/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
  context: {
    db,
  },
  playground: true,
  introspection: true,
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
