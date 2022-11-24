const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crmevents', {
    'Date received': {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Product: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Sub-product': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Issue: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Sub-issue': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Consumer complaint narrative': {
      type: DataTypes.STRING,
      allowNull: true
    },
    Tags: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Consumer consent provided?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Submitted via': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Date sent to company': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Company response to consumer': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Timely response?': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'Consumer disputed?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Complaint ID': {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Client_ID: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'client',
        key: 'client_id'
      }
    }
  }, {
    sequelize,
    tableName: 'crmevents',
    schema: 'test',
    timestamps: false,
    indexes: [
      {
        name: "crmevents_pkey",
        unique: true,
        fields: [
          { name: "Complaint ID" },
        ]
      },
    ]
  });
};
