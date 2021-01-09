module.exports = function(sequelize, DataTypes) {
  const tool = sequelize.define("tool", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    /*category: {
      type: DataTypes.STRING,
      allowNull: true
    },*/
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  //associations come next

  tool.associate = function(models) {
    tool.belongsTo(models.category);
  };

  return tool;
};
