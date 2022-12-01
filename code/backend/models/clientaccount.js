const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientaccount', {
    client_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientaccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "clientaccount_pkey",
        unique: true,
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
