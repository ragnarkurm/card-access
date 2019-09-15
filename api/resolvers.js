const resolvers = {

  Query: {

    // resolver: (parent, args, context, info): => { ... }

    getEvents: (parent, {timeBegin, timeEnd, card, terminal}, context, info) => {
      return [{
        'id': '123',
      }];
    }

  },

};

export default resolvers;
