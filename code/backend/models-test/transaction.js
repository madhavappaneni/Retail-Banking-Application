const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    trans_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'account',
        key: 'account_id'
      }
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    operation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    k_symbol: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fulldatewithtime: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
    schema: 'test',
    timestamps: false,
    indexes: [
      {
        name: "transaction_pkey",
        unique: true,
        fields: [
          { name: "trans_id" },
        ]
      },
    ]
  });
};
