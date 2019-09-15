import gql from 'graphql-tag';

const typeDefs = gql`

  type EventRequest {
    card: String!
    terminal: String!
  }

  type EventResponse {
    id: Int
    card: String
    terminal: String
    time: Int
    status: Boolean
  }

  type Mutation {
    newEvent(
      card: String!,
      terminal: String!
    ): EventResponse
  }

  type Query {
    getEvents(
      timeBegin: Int,
      timeEnd: Int,
      card: String,
      terminal: String
    ): [EventResponse]
  }

`;

export default typeDefs;
