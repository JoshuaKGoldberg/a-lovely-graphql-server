import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import { jokes } from "./data.mjs";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    all(limit: Int): [String!]!
    random: String!
  }

  type Mutation {
    add(joke: String!): Int!
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  // Queries
  all: ({ limit = Infinity }) => {
    return jokes.slice(0, limit);
  },
  random: () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
  },
  // Mutations
  add: ({ joke }) => {
    return jokes.push(joke);
  },
};

const app = express();

// (so dev localhost URLs don't give Cross-Origin-Resource-Sharing complaints)
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema: schema,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
