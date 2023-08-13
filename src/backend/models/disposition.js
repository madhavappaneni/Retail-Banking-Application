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
        model: 'clientaccount',
        key: 'client_id'
      }
    }
  }, {
    sequelize,
    tableName: 'disposition',
    schema: 'public',
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
