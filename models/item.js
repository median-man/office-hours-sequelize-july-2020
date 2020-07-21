module.exports = function (sequelize, DataTypes) {
  // creates table named "items"
  const Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
  });

  Item.associate = function (models) {
    Item.belongsTo(models.Department);
  };

  return Item;
};
