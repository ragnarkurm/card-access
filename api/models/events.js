import times from "lodash.times";
import random from "lodash.random";

const table = (sequelize, DataTypes) => {

  const Events = sequelize.define(
    "events",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
      }
    },
    {
      freezeTableName: true,
    }
  );

  Events.associate = function (models) {
    Events.belongsTo(models.cards, { foreignKey: { allowNull: false }, onDelete: 'cascade' });
    Events.belongsTo(models.terminals, { foreignKey: { allowNull: false }, onDelete: 'cascade' });
  };

  Events.populate = (callback, card, terminal) => {
    const bulk = Events.bulkCreate(
      times(random(0,10), () => ({
        status: !!random(0, 1),
        cardId: card.get('id'),
        terminalId: terminal.get('id'),
      }))
    );
    bulk.then(callback);
    return bulk;
  }

  return Events;

}

export default table;
