const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('state', {
    state_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    state_abbrev: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    division: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'state',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "state_pkey",
        unique: true,
        fields: [
          { name: "state_name" },
        ]
      },
    ]
  });
};
