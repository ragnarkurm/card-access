import random from "lodash.random";

const populate = (db) => {
  const cards = db.cards.populate(() => {});
  const terminals = db.terminals.populate(() => {});
  const p = Promise.all([cards, terminals]);
  p.then(function (data) {
    const [cards, terminals] = data;
    for (let count = random(5, 20) ; count > 0 ; count--) {
      const card = cards[random(0, cards.length - 1)];
      const terminal = terminals[random(0, terminals.length - 1)];
      db.events.populate(() => {}, card, terminal);
    }
  });
};

export default populate;
