const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    account_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'district',
        key: 'district_id'
      }
    },
    frequency: {
      type: DataTypes.ENUM("Issuance After Transaction","Monthly Issuance","Weekly Issuance"),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'account',
    schema: 'test',
    timestamps: false,
    indexes: [
      {
        name: "account_pkey",
        unique: true,
        fields: [
          { name: "account_id" },
        ]
      },
    ]
  });
};
