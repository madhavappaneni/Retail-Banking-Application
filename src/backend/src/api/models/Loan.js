const db = require("./index");

module.exports = (sequelize, Sequelize) => {
  return sequelize.define('loan', {
    loan_id: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    account_id: {
      type: Sequelize.STRING(50),
      allowNull: false,
      references: {
        model: 'account',
        key: 'account_id'
      }
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    payments: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    location: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    purpose: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loan',
    schema: 'public',
    timestamps: false
  });
};
