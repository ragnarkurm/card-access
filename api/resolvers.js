const resolvers = {

  Query: {

    // resolver: (parent, args, {db}, info): => { ... }

    getCards: (parent, args, {db}, info) => {
      return db.cards.findAll();
    },

    getEvents: (parent, {timeBegin, timeEnd, cardId, terminalId}, {db}, info) => {
      const where = {};
      if (timeBegin) {where['createdAt'] = {$gte: timeBegin};}
      if (timeEnd) {where['createdAt'] = {$lte: timeEnd};}
      if (cardId) {where['cardId'] = cardId;}
      if (terminalId) {where['terminalId'] = terminalId;}
      return db.events.findAll({where: where});
    },

    getTerminals: (parent, args, {db}, info) => {
      return db.terminals.findAll();
    },

  },

  Mutation: {

    newCard: (parent, {idString}, {db}, info) => {
      return db.cards.create({
        idString: idString,
      });
    },

    newEvent: (parent, {cardId, terminalId}, {db}, info) => {
      return db.events.create({
        cardId: cardId,
        terminalId: terminalId,
      });
    },

    newTerminal: (parent, {name}, {db}, info) => {
      return db.terminals.create({
        name: name,
      });
    },

  },

};

export default resolvers;
