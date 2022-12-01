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
      allowNull: false,
      references: {
        model: 'state',
        key: 'state_name'
      }
    }
  }, {
    sequelize,
    tableName: 'district',
    schema: 'public',
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
