const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loan', {
    loan_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'account',
        key: 'account_id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loan',
    schema: 'test',
    timestamps: false
  });
};
