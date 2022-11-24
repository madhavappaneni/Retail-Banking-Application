const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disposition', {
    disp_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'client',
        key: 'client_id'
      }
    },
    account_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'account',
        key: 'account_id'
      }
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'disposition',
    schema: 'test',
    timestamps: false,
    indexes: [
      {
        name: "disposition_pkey",
        unique: true,
        fields: [
          { name: "disp_id" },
        ]
      },
    ]
  });
};
