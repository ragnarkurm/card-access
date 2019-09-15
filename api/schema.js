import gql from 'graphql-tag';

const typeDefs = gql`

  type Card {
    id: Int!
    idString: String!
  }

  type Event {
    id: Int!
    cardId: String!
    status: Boolean!
    terminalId: String!
    createdAt: String!
  }

  type Terminal {
    id: Int!
    name: String!
  }

  type Mutation {

    newCard(
      idString: String!
    ): Card

    newEvent(
      cardId: Int!,
      terminalId: Int!
    ): Event

    newTerminal(
      name: String!
    ): Terminal

  }

  type Query {

    getCards: [Card]!

    getEvents(
      cardId: String,
      terminalId: String,
      timeBegin: Int,
      timeEnd: Int
    ): [Event]!

    getTerminals: [Terminal]!

  }

`;

export default typeDefs;
