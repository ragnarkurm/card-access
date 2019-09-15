import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";

const table = (sequelize, DataTypes) => {

  const Terminals = sequelize.define(
    "terminals",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      }
    },
    {
      freezeTableName: true,
    }
  );

  Terminals.associate = function (models) {
    Terminals.hasMany(models.events, { foreignKey: { allowNull: false }, onDelete: 'cascade' });
  };

  Terminals.populate = (callback) => {
    const bulk = Terminals.bulkCreate(
      times(random(5,20), () => ({
        name: faker.lorem.word(),
      }))
    );
    bulk.then(callback);
    return bulk;
  }

  return Terminals;

}

export default table;
