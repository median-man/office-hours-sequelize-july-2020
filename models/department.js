module.exports = function(sequelize, DataTypes) {
  const Department = sequelize.define("Department", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    }
  });

  Department.associate = function(models) {
    Department.hasMany(models.Item);
  };

  return Department;
};
