import times from "lodash.times";
import random from "lodash.random";

const table = (sequelize, DataTypes) => {

  const Cards = sequelize.define(
    "cards",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idString: {
        type: DataTypes.STRING,
        unique: true,
      }
    },
    {
      freezeTableName: true,
    }
  );

  Cards.associate = (models) => {
    Cards.hasMany(models.events, { foreignKey: { allowNull: false }, onDelete: 'cascade' });
  };

  Cards.populate = (callback) => {
    const bulk = Cards.bulkCreate(
      times(random(10,50), () => ({
        idString: random(10000000000000,99999999999999).toString(10),
      }))
    );
    bulk.then(callback);
    return bulk;
  }

  return Cards;

};

export default table;
