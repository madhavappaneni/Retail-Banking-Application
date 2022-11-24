const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crmreviews', {
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Stars: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Reviews: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Product: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crmreviews',
    schema: 'test',
    timestamps: false
  });
};
