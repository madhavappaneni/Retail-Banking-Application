const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRMEvents', {
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
      type: DataTypes.STRING(20000),
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
      allowNull: true
    },
    'Date sent to company': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Company response to consumer': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Timely response?': {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'CRMEvents',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "CRMEvents_pkey",
        unique: true,
        fields: [
          { name: "Complaint ID" },
        ]
      },
    ]
  });
};
