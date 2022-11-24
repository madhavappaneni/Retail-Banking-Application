const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('district', {
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state_name: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'district',
    schema: 'test',
    timestamps: false,
    indexes: [
      {
        name: "district_pkey",
        unique: true,
        fields: [
          { name: "district_id" },
        ]
      },
    ]
  });
};
